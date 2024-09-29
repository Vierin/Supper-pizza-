import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import '../globals.css';
import { Header } from '@/shared/components/shared/header';

const nunito = Nunito({
	subsets: ['cyrillic'],
	variable: '--font-nunito',
	weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
	title: 'Supper Pizza',
	description: 'The best pizza in town',
};

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={nunito.className}>
				<main className="min-h-screen">
					<Header />
					{children}
				</main>
			</body>
		</html>
	);
}
