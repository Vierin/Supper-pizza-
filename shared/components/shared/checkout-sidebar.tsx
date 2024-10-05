import React from 'react';
import { WhiteBlock } from './white-block';
import { CheckoutItemDetails } from './checkout-item-details';
import { ArrowRight, Package, Percent, Truck } from 'lucide-react';
import { Button, Skeleton } from '../ui';
import { cn } from '@/shared/lib/utils';

const VAT = 23;
const DEVLIVERY_PRICE = 19;

interface Props {
	totalAmount: number;
	loading?: boolean;
	className?: string;
}

export const CheckoutSidebar: React.FC<Props> = ({
	totalAmount,
	loading,
	className,
}) => {
	const vatPrice = (totalAmount * VAT) / 100;

	return (
		<WhiteBlock className={cn('p-6 sticky top-4', className)}>
			<CheckoutItemDetails
				title={
					<div className="flex items-center">
						<Percent size={18} className="mr-2 text-gray-300" />
						VAT ({VAT}%)
					</div>
				}
				value={
					loading ? (
						<Skeleton className="h-6 w-16 rounded-[6px]" />
					) : (
						`${vatPrice} PLN`
					)
				}
			/>

			<CheckoutItemDetails
				title={
					<div className="flex items-center">
						<Package size={18} className="mr-2 text-gray-300" />
						Total cost of cart
					</div>
				}
				value={
					loading ? (
						<Skeleton className="h-6 w-16 rounded-[6px]" />
					) : (
						totalAmount + ' PLN'
					)
				}
			/>

			<CheckoutItemDetails
				title={
					<div className="flex items-center">
						<Truck size={18} className="mr-2 text-gray-300" />
						Delivery
					</div>
				}
				value={
					loading ? (
						<Skeleton className="h-6 w-16 rounded-[6px]" />
					) : (
						`${DEVLIVERY_PRICE} PLN`
					)
				}
			/>

			<div className="flex flex-col gap-1 mt-10">
				<span className="text-xl">Total:</span>
				<span className="text-[34px] font-extrabold">
					{loading ? (
						<Skeleton className="h-11 w-48" />
					) : (
						<span className="h-11 text-[34px] font-extrabold">
							{totalAmount + DEVLIVERY_PRICE} PLN
						</span>
					)}
				</span>
			</div>

			<Button
				loading={loading}
				type="submit"
				className="w-full h-14 rounded-2xl mt-6 text-base font-bold"
			>
				Proceed to Payment
				<ArrowRight className="w-5 ml-2" />
			</Button>
		</WhiteBlock>
	);
};
