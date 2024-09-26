'use client';

import React, { ChangeEvent, useState } from 'react';
import { FilterChecboxProps, FilterCheckbox } from './filter-checkbox';
import { Input, Skeleton } from '../ui';

type Item = FilterChecboxProps;

interface CheckboxFiltersGroupProps {
	title: string;
	items: Item[];
	defaultItems?: Item[];
	limit?: number;
	loading?: boolean;
	searchInputPlaceholder?: string;
	onClickCheckbox?: (id: string) => void;
	defaultValue?: string[];
	className?: string;
	selected?: Set<string>;
	name?: string;
}

export const CheckboxFiltersGroup: React.FC<CheckboxFiltersGroupProps> = ({
	title,
	items,
	defaultItems,
	limit = 5,
	searchInputPlaceholder = 'Search...',
	onClickCheckbox,
	defaultValue,
	className,
	name,
	selected,
	loading
}) => {
	const [showAll, setShowAll] = useState(false);
	const [searchValue, setSearchValue] = useState('');

	const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	if(loading) {
		return (
			<div className={className}>
				<p className="mb-3 font-bold">{title}</p>
				
				{
					...[...Array(limit)].map((_, index) => (
						<Skeleton key={index} className="h-6 mb-4 rounded-[8px]" />
					))
				}
				<Skeleton className="w-28 h-6 mb-4 rounded-[8px]" />
			</div>
		)
	}

	const list = showAll
		? items.filter((item) =>
				item.text.toLowerCase().includes(searchValue.toLocaleLowerCase())
		  )
		: (defaultItems || items).slice(0, limit);

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
						checked={selected?.has(item.value)}
						onCheckedChange={() => onClickCheckbox?.(item.value)}
						name={name}
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
