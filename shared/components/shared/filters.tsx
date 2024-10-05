'use client';

import React, { useEffect, useState } from 'react';
import { Title } from './title';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { useIngredients, useFilters, useQueryFilters } from '@/shared/hooks';

interface FiltersProps {
	className?: string;
}

export const Filters: React.FC<FiltersProps> = ({ className }) => {
	const { ingredients, loading } = useIngredients();
	const filters = useFilters();

	useQueryFilters(filters);

	const items = ingredients.map((item) => ({
		text: item.name,
		value: item.id.toString(),
	}));

	const updatePrices = (prices: number[]) => {
		filters.setPrices('priceFrom', prices[0]);
		filters.setPrices('priceTo', prices[1]);
	};

	return (
		<div className={className}>
			<Title text="Filters" size="sm" className="mb-5 font-bold" />

			<CheckboxFiltersGroup
				title="Pizza Types"
				className="mb-5"
				name="pizzaTypes"
				onClickCheckbox={filters.setPizzaTypes}
				selected={filters.pizzaTypes}
				items={[
					{ text: 'Thin', value: '1' },
					{ text: 'Traditional', value: '2' },
				]}
			/>

			<CheckboxFiltersGroup
				title="Sizes"
				className="mb-5"
				name="sizes"
				onClickCheckbox={filters.setSizes}
				selected={filters.sizes}
				items={[
					{ text: '20 cm', value: '20' },
					{ text: '30 cm', value: '30' },
					{ text: '40 cm', value: '40' },
				]}
			/>

			<div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
				<p className="font-bold mb-3">Price:</p>
				<div className="flex gap-3 mb-5">
					<Input
						type="number"
						placeholder="0"
						min={0}
						max={500}
						onChange={(e) =>
							filters.setPrices('priceFrom', parseInt(e.target.value))
						}
						value={String(filters.prices.priceFrom)}
					/>
					<Input
						type="number"
						placeholder="500"
						min={100}
						max={500}
						onChange={(e) =>
							filters.setPrices('priceTo', parseInt(e.target.value))
						}
						value={String(filters.prices.priceTo)}
					/>
				</div>
				<RangeSlider
					min={0}
					max={500}
					step={10}
					value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 500]}
					onValueChange={updatePrices}
				/>
			</div>

			<CheckboxFiltersGroup
				title="Ingridients"
				className="mt-5"
				name="ingredients"
				limit={6}
				items={items}
				defaultItems={items.slice(0, 6)}
				loading={loading}
				onClickCheckbox={filters.setSelectedIngredients}
				selected={filters.selectedIngredients}
			/>
		</div>
	);
};
