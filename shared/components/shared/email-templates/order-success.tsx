import { CartItemDTO } from '@/shared/services/dto/cart.dto';
import React from 'react';

interface Props {
	orderId: number;
	items: CartItemDTO[];
}

export const OrderSuccessTemplate: React.FC<Props> = ({ orderId, items }) => (
	<div>
		<h1>Thanks for your order! 🎉</h1>

		<p>Your order #{orderId} paid. List:</p>

		<hr />

		<ul>
			{items.map((item) => (
				<li key={item.id}>
					{item.productItem.product.name} | {item.productItem.price} PLN x{' '}
					{item.quantity}. = {item.productItem.price * item.quantity} ₽
				</li>
			))}
		</ul>
	</div>
);
