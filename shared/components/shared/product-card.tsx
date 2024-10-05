import { Plus } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Title } from './title';
import { Button } from '../ui';
import { Ingredient } from '@prisma/client';

interface Props {
	id: number;
	name: string;
	price: number;
	imageUrl: string;
	ingredients: Ingredient[];
	className?: string;
}

export const ProductCard: React.FC<Props> = ({
	id,
	name,
	price,
	imageUrl,
	ingredients,
	className,
}) => {
	return (
		<div className={className}>
			<Link href={`/product/${id}`}>
				<div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
					<Image width={215} height={215} src={imageUrl} alt={name} />
				</div>

				<Title className="mt-3 mb-1 font-bold" size="sm" text={name} />

				<p className="text-sm text-gray-400">
					{ingredients.map((ingredient) => ingredient.name).join(', ')}
				</p>

				<div className="flex justify-between items-center mt-4">
					<span className="text-[20px]">
						from <b>{price} PLN</b>
					</span>

					<Button variant="secondary" className="text-base font-bold">
						<Plus size={20} className="mr-1" />
						Add
					</Button>
				</div>
			</Link>
		</div>
	);
};
