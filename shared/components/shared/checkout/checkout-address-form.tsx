'use client';

import React from 'react';
import { WhiteBlock } from '../white-block';
import { FormInput, FormTextarea } from '../form';
// import { AdressInput } from '../address-input';
import { Controller, useFormContext } from 'react-hook-form';
import { ErrorText } from '../error-text';

interface Props {
	className?: string;
}

export const CheckoutAddressForm: React.FC<Props> = ({ className }) => {
	const { control } = useFormContext();

	return (
		<WhiteBlock title="3. Delivery address" className={className}>
			<div className="flex flex-col gap-5">
				<FormInput name="address" className="text-base" placeholder="Adress" />

				<FormTextarea
					name="comment"
					className="text-base"
					placeholder="Comment to order"
					rows={5}
				/>
			</div>
		</WhiteBlock>
	);
};
