'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ProductWithRelations } from '@/@types/prisma';
// import { useCartStore } from '@/shared/store';
// import toast from 'react-hot-toast';
import { cn } from '@/shared/lib/utils';
import { DialogContent, Dialog } from '@/shared/components/ui/dialog';
import ChooseProductForm from '../choose-product-form';
import ChoosePizzaForm from '../choose-pizza-form';

interface Props {
	product: ProductWithRelations;
	className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
	const router = useRouter();
	const isPizzaForm = Boolean(product.items[0].pizzaType);

	return (
		<Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
			<DialogContent
				className={cn(
					'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
					className
				)}
			>
				{isPizzaForm ? (
					<ChoosePizzaForm
						imageUrl={product.imageUrl}
						name={product.name}
						ingredients={[]}
					/>
				) : (
					<ChooseProductForm
						imageUrl={product.imageUrl}
						name={product.name}
						price={200}
					/>
				)}

				{/* <ProductForm product={product} onSubmit={() => router.back()} /> */}
			</DialogContent>
		</Dialog>
	);
};
