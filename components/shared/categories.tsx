import { cn } from '@/lib/utils';
import React from 'react';

interface CategoriesProps {
	className?: string;
}

const cats = ['All', 'Pizza', 'Drinks', 'Desserts', 'Sides'];
const activeIndex = 0;

export const Categories: React.FC<CategoriesProps> = ({ className }) => {
	return (
		<div
			className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}
		>
			{cats.map((cat, index) => (
				<a
					className={cn(
						'flex items-center font-bold h-10 rounded-2xl px-5',
						activeIndex === index &&
							'bg-white shadow-gray-200 text-primary shadow-md'
					)}
					key={index}
				>
					<button>{cat}</button>
				</a>
			))}
		</div>
	);
};
