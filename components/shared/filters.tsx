'use client';

import React, { useState } from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { useFilterIngredients } from '@/hooks/useFilterIngredients';
import { useSet } from 'react-use';

interface FiltersProps {
	className?: string;
}

interface PriceProps {
	priceFrom: number;
	priceTo: number;
}

export const Filters: React.FC<FiltersProps> = ({ className }) => {
	const { ingredients, loading, onAddId, selectedIds } = useFilterIngredients();
	const [ sizes, { toggle: toggleSizes } ] = useSet(new Set<string>([]));
	const [ pizzaTypes, { toggle: togglePizzaTypes } ] = useSet(new Set<string>([]));

	const [ prices, setPrice ] = useState<PriceProps>({ priceFrom: 0, priceTo: 500 });

	const items = ingredients.map((item) => ({
		text: item.name,
		value: item.id.toString(),
	}));

	const updatePrice = (name: keyof PriceProps, value: number) => {
		setPrice({
			...prices,
			[name]: value
		});
	}

	return (
		<div className={className}>
			<Title text="Filters" size="sm" className="mb-5 font-bold" />

			<CheckboxFiltersGroup
				title="Pizza Types"
				className="mb-5"
				name='pizzaTypes'
				onClickCheckbox={togglePizzaTypes}
				selected={pizzaTypes}
				items={[
					{ text: 'Thin', value: '1' },
					{ text: 'Traditional', value: '2' }
				]}
			/>

			<CheckboxFiltersGroup
				title="Sizes"
				className="mb-5"
				name='sizes'
				onClickCheckbox={toggleSizes}
				selected={sizes}
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
						onChange={(e) => updatePrice('priceFrom', parseInt(e.target.value))}
						value={prices.priceFrom.toString()}
					/>
					<Input
						type="number"
						placeholder="500"
						min={100}
						max={500}
						onChange={(e) => updatePrice('priceTo', parseInt(e.target.value))}
						value={prices.priceTo.toString()}
					/>
				</div>
				<RangeSlider min={0} max={500} step={10} value={[prices.priceFrom, prices.priceTo]} onValueChange={([priceFrom, priceTo]) => setPrice({priceFrom, priceTo})} />
			</div>

			<CheckboxFiltersGroup
				title="Ingridients"
				className="mt-5"
				name='ingredients'
				limit={6}
				items={items}
				defaultItems={items.slice(0, 6)}
				loading={loading}
				onClickCheckbox={onAddId}
				selected={selectedIds}
			/>
		</div>
	);
};
