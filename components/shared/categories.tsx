'use client';

import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';
import React, { useEffect } from 'react';

interface CategoriesProps {
	className?: string;
}

const cats = [
	{ id: 1, name: 'Pizza' },
	{ id: 2, name: 'Breakfast' },
	{ id: 3, name: 'Drinks' },
	{ id: 4, name: 'Desserts' },
	{ id: 5, name: 'Sides' },
];

export const Categories: React.FC<CategoriesProps> = ({ className }) => {
	const categoryActiveId = useCategoryStore((state) => state.activeId);

	return (
		<div
			className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}
		>
			{cats.map(({ name, id }, index) => (
				<a
					className={cn(
						'flex items-center font-bold h-10 rounded-2xl px-5',
						categoryActiveId === id &&
							'bg-white shadow-gray-200 text-primary shadow-md'
					)}
					href={`#${name}`}
					key={index}
				>
					<button>{name}</button>
				</a>
			))}
		</div>
	);
};
