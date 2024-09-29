import type { Metadata } from 'next';
import { Header } from '@/shared/components/shared/header';

export const metadata: Metadata = {
	title: 'Supper Pizza | Home',
	description: 'The best pizza in town',
};

export default function HomeLayout({
	children,
	modal,
}: Readonly<{
	children: React.ReactNode;
	modal?: React.ReactNode;
}>) {
	return (
		<main className="min-h-screen">
			<Header />
			{children}
			{modal}
		</main>
	);
}
