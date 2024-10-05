'use client';

import {
	CheckoutSidebar,
	Container,
	Title,
	WhiteBlock,
} from '@/shared/components/shared';
import { CheckoutItem } from '@/shared/components/shared';
import { Input, Textarea } from '@/shared/components/ui';
import { PizzaSize, PizzaType } from '@/shared/constants/pizza';
import { useCart } from '@/shared/hooks';
import { getCartItemDetails } from '@/shared/lib';

export default function CheckoutPage() {
	const { totalAmount, updateItemQuantity, items, removeCartItem, loading } =
		useCart();

	const onClickCountButton = (
		id: number,
		quantity: number,
		type: 'plus' | 'minus'
	) => {
		const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
		updateItemQuantity(id, newQuantity);
	};

	return (
		<Container className="flex flex-col my-10">
			<Title text="Checkout" className="font-extrabold mb-8 text-[36px]" />

			<div className="flex gap-10">
				<div className="flex gap-10 flex-col flex-1 mb-20">
					<WhiteBlock title="1. Cart">
						{items.map((item) => (
							<CheckoutItem
								key={item.id}
								id={item.id}
								imageUrl={item.imageUrl}
								details={getCartItemDetails(
									item.ingredients,
									item.pizzaType as PizzaType,
									item.pizzaSize as PizzaSize
								)}
								name={item.name}
								price={item.price}
								quantity={item.quantity}
								disabled={item.disabled}
								onClickCountButton={(type) =>
									onClickCountButton(item.id, item.quantity, type)
								}
							/>
						))}
					</WhiteBlock>

					<WhiteBlock title="2. Personal data">
						<div className="grid grid-cols-2 gap-5">
							<Input
								name="firstName"
								className="text-base"
								placeholder="First name"
							/>
							<Input
								name="lastName"
								className="text-base"
								placeholder="Last name"
							/>
							<Input name="email" className="text-base" placeholder="E-mail" />
							<Input name="phone" className="text-base" placeholder="Phone" />
						</div>
					</WhiteBlock>

					<WhiteBlock title="3. Delivery address">
						<div className="flex flex-col gap-5">
							<Input
								name="address"
								className="text-base"
								placeholder="Address"
							/>
							<Textarea
								rows={5}
								className="text-base"
								placeholder="Comment to order"
							/>
						</div>
					</WhiteBlock>
				</div>

				<div className="w-[450px]">
					<CheckoutSidebar totalAmount={totalAmount} loading={loading} />
				</div>
			</div>
		</Container>
	);
}
