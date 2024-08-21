'use client';

import React, { ChangeEvent, useState } from 'react';
import { FilterChecboxProps, FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';

type Item = FilterChecboxProps;

interface CheckboxFiltersGroupProps {
	title: string;
	items: Item[];
	defaultItems: Item[];
	limit?: number;
	searchInputPlaceholder?: string;
	onChange?: (values: string[]) => void;
	defaultValue?: string[];
	className?: string;
}

export const CheckboxFiltersGroup: React.FC<CheckboxFiltersGroupProps> = ({
	title,
	items,
	defaultItems,
	limit = 5,
	searchInputPlaceholder = 'Search...',
	onChange,
	defaultValue,
	className,
}) => {
	const [showAll, setShowAll] = useState(false);
	const [searchValue, setSearchValue] = useState('');

	const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	const list = showAll
		? items.filter((item) =>
				item.text.toLowerCase().includes(searchValue.toLocaleLowerCase())
		  )
		: defaultItems.slice(0, limit);

	return (
		<div className={className}>
			<p className="mb-3 font-bold">{title}</p>

			{showAll && (
				<div className="mb-5">
					<Input
						onChange={onChangeSearchInput}
						placeholder={searchInputPlaceholder}
						className="bg-gray-50 border-none"
					/>
				</div>
			)}

			<div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
				{list.map((item) => (
					<FilterCheckbox
						key={String(item.value)}
						text={item.text}
						value={item.value}
						endAdornment={item.endAdornment}
						checked={false}
						onCheckedChange={(id) => console.log(id)}
					/>
				))}
			</div>

			{items.length > limit && (
				<div className={showAll ? 'border-t border-neutral-100 mt-4' : ''}>
					<button
						className="text-primary mt-3"
						onClick={() => setShowAll((prev) => !prev)}
					>
						{showAll ? 'Show less' : '+ Show all'}
					</button>
				</div>
			)}
		</div>
	);
};
