'use client';

import { cn } from '@/shared/lib/utils';
import { useCategoryStore } from '@/shared/store/category';
import { Category } from '@prisma/client';
import React, { useEffect } from 'react';

interface CategoriesProps {
	items: Category[];
	className?: string;
}

export const Categories: React.FC<CategoriesProps> = ({ items, className }) => {
	const categoryActiveId = useCategoryStore((state) => state.activeId);

	return (
		<div
			className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}
		>
			{items.map(({ name, id }, index) => (
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
