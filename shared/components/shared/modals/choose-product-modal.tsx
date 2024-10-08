'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ProductWithRelations } from '@/@types/prisma';
import toast from 'react-hot-toast';
import { cn } from '@/shared/lib/utils';
import { DialogContent, Dialog } from '@/shared/components/ui/dialog';
import { ChooseProductForm } from '../choose-product-form';
import { ChoosePizzaForm } from '../choose-pizza-form';
import { useCartStore } from '@/shared/store';

interface Props {
	product: ProductWithRelations;
	className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
	const router = useRouter();
	const firstItem = product.items[0];
	const isPizzaForm = Boolean(firstItem.pizzaType);
	const [addCartItem, loading] = useCartStore((state) => [
		state.addCartItem,
		state.loading,
	]);

	const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
		try {
			const itemId = productItemId ?? firstItem.id;

			await addCartItem({ productItemId: itemId, ingredients });

			toast.success(`${product.name} added to cart`);
			router.back();
		} catch (error) {
			console.error(error);
			toast.error('Cannot add product to cart');
		}
	};

	return (
		<Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
			<DialogContent
				className={cn(
					'p-0 w-[1060px] max-w-[1060px] min-h-[540px] bg-white overflow-hidden',
					className
				)}
			>
				{isPizzaForm ? (
					<ChoosePizzaForm
						imageUrl={product.imageUrl}
						name={product.name}
						ingredients={product.ingredients}
						items={product.items}
						onSubmit={onSubmit}
						loading={loading}
					/>
				) : (
					<ChooseProductForm
						imageUrl={product.imageUrl}
						name={product.name}
						price={firstItem.price}
						onSubmit={onSubmit}
						loading={loading}
					/>
				)}

				{/* <ProductForm product={product} onSubmit={() => router.back()} /> */}
			</DialogContent>
		</Dialog>
	);
};
