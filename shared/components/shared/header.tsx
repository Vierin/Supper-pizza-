import { cn } from '@/shared/lib/utils';
import React from 'react';
import { Container } from './container';
import Image from 'next/image';
import { Button } from '../ui';
import { ArrowRight, Search, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';
import { SearchInput } from './search-input';
import { CartButton } from './cart-button';

interface HeaderProps {
	className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
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

				{/* search */}
				<div className="mx-10 flex-1">
					<SearchInput />
				</div>

				{/* right side */}
				<div className="flex items-center gap-3">
					<Button variant="outline" className="flex items-center gap-1">
						<User size={16} />
						Sign in
					</Button>
					<div>
						<CartButton />
					</div>
				</div>
			</Container>
		</div>
	);
};
