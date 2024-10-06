'use client';

import { cn } from '@/shared/lib/utils';
import React, { use, useEffect } from 'react';
import { Container } from './container';
import Image from 'next/image';
import { Button } from '../ui';
import { User } from 'lucide-react';
import Link from 'next/link';
import { SearchInput } from './search-input';
import { CartButton } from './cart-button';
import toast from 'react-hot-toast';
import { useRouter, useSearchParams } from 'next/navigation';

interface HeaderProps {
	hasSearch?: boolean;
	hasCart?: boolean;
	className?: string;
}

export const Header: React.FC<HeaderProps> = ({
	hasSearch = true,
	hasCart = true,
	className,
}) => {
	const router = useRouter();
	const searchParams = useSearchParams();

	useEffect(() => {
		let toastMessage = '';

		if (searchParams.has('paid')) {
			toastMessage = 'Order successfully paid! Information sent to email.';
		}

		if (searchParams.has('verified')) {
			toastMessage = 'Email successfully verified!';
		}

		if (toastMessage) {
			setTimeout(() => {
				router.replace('/');
				toast.success(toastMessage, {
					duration: 3000,
				});
			}, 1000);
		}
	}, []);

	return (
		<div className={cn('border border-b', className)}>
			<Container className="flex items-center justify-between py-8">
				{/* left side */}
				<Link href="/">
					<div className="flex items-center gap-4">
						<Image src="/logo.png" alt="logo" width={35} height={35} />
						<div>
							<h1 className="text-2xl uppercase font-black">Supper Pizza</h1>
							<p className="text-sm text-gray-400 leading-3">
								nothing tastes better
							</p>
						</div>
					</div>
				</Link>

				{hasSearch && (
					<div className="mx-10 flex-1">
						<SearchInput />
					</div>
				)}

				{/* right side */}
				<div className="flex items-center gap-3">
					<Button variant="outline" className="flex items-center gap-1">
						<User size={16} />
						Sign in
					</Button>
					{hasCart && <CartButton />}
				</div>
			</Container>
		</div>
	);
};
