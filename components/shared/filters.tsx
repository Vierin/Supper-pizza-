import React from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';

interface FiltersProps {
	className?: string;
}

export const Filters: React.FC<FiltersProps> = ({ className }) => {
	return (
		<div className={className}>
			<Title text="Filters" size="sm" className="mb-5 font-bold" />

			<div className="flex flex-col gap-4">
				<FilterCheckbox text="Сan be assembled" value="1" />
				<FilterCheckbox text="New" value="2" />
			</div>

			<div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
				<p className="font-bold mb-3">Price:</p>
				<div className="flex gap-3 mb-5">
					<Input
						type="number"
						placeholder="0"
						min={0}
						max={500}
						defaultValue={0}
					/>
					<Input
						type="number"
						placeholder="500"
						min={100}
						max={500}
						defaultValue={400}
					/>
				</div>
				<RangeSlider min={0} max={500} step={10} value={[0, 400]} />
			</div>

			<CheckboxFiltersGroup
				title="Ingridients"
				className="mt-5"
				limit={6}
				items={[
					{
						text: 'Mushrooms',
						value: '1',
					},
					{
						text: 'Tomato',
						value: '2',
					},
					{
						text: 'Cheese',
						value: '3',
					},
					{
						text: 'Bacon',
						value: '4',
					},
					{
						text: 'Olives',
						value: '5',
					},
					{
						text: 'Pepperoni',
						value: '6',
					},
					{
						text: 'Tuna',
						value: '7',
					},
					{
						text: 'Chicken',
						value: '8',
					},
					{
						text: 'Pineapple',
						value: '9',
					},
					{
						text: 'Ham',
						value: '10',
					},
					{
						text: 'Onions',
						value: '11',
					},
					{
						text: 'Green Peppers',
						value: '12',
					},
					{
						text: 'Sausage',
						value: '13',
					},
					{
						text: 'Spinach',
						value: '14',
					},
					{
						text: 'Garlic',
						value: '15',
					},
					{
						text: 'Artichokes',
						value: '16',
					},
					{
						text: 'Anchovies',
						value: '17',
					},
				]}
				defaultItems={[
					{
						text: 'Mushrooms',
						value: '1',
					},
					{
						text: 'Tomato',
						value: '2',
					},
					{
						text: 'Cheese',
						value: '3',
					},
					{
						text: 'Bacon',
						value: '4',
					},
					{
						text: 'Olives',
						value: '5',
					},
					{
						text: 'Pepperoni',
						value: '6',
					},
					{
						text: 'Tuna',
						value: '7',
					},
				]}
			/>
		</div>
	);
};
