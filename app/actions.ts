'use server';

import { prisma } from '@/prisma/prisma-client';
import { PayOrderTemplate } from '@/shared/components/shared/email-templates';
import { CheckoutFormValues } from '@/shared/constants';
import { createPayment, sendEmail } from '@/shared/lib';
import { $Enums } from '@prisma/client';
import { cookies } from 'next/headers';

export async function createOrder(data: CheckoutFormValues) {
	try {
		const cookieStore = cookies();
		const token = cookieStore.get('cartToken')?.value;

		if (!token) {
			throw new Error('Cart is not found');
		}

		const userCart = await prisma.cart.findFirst({
			include: {
				user: true,
				items: {
					include: {
						ingredients: true,
						productItem: {
							include: {
								product: true,
							},
						},
					},
				},
			},
			where: {
				token,
			},
		});

		if (!userCart) {
			throw new Error('Cart not found');
		}

		if (userCart?.totalAmount === 0) {
			throw new Error('Cart is empty');
		}

		const order = await prisma.order.create({
			data: {
				token,
				fullName: data.firstName + ' ' + data.lastName,
				email: data.email,
				phone: data.phone,
				address: data.address,
				comment: data.comment,
				totalAmount: userCart.totalAmount,
				status: $Enums.OrderStatus.PENDING,
				items: JSON.stringify(userCart.items),
			},
		});

		// clear cart
		await prisma.cart.update({
			where: {
				id: userCart.id,
			},
			data: {
				totalAmount: 0,
			},
		});

		await prisma.cartItem.deleteMany({
			where: {
				cartId: userCart.id,
			},
		});

		const paymentData = await createPayment({
			amount: order.totalAmount,
			orderId: order.id,
			description: 'Order Payment #' + order.id,
		});

		if (!paymentData) {
			throw new Error('Payment data not found');
		}

		await prisma.order.update({
			where: {
				id: order.id,
			},
			data: {
				paymentId: paymentData.id,
			},
		});

		const paymentUrl = paymentData.confirmation.confirmation_url;

		await sendEmail(
			data.email,
			'Super Pizza / Pay for the order #' + order.id,
			PayOrderTemplate({
				orderId: order.id,
				totalAmount: order.totalAmount,
				paymentUrl,
			})
		);

		return paymentUrl;
	} catch (error) {
		console.log('[CreateOrder] Server error', error);
	}
}
