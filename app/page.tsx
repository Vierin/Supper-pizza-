import { Container, Filters, Title, TopBar } from '@/components/shared';
import { ProductCard } from '@/components/shared/product-card';
import { ProductsGroupList } from '@/components/shared/products-group-list';

export default function Home() {
	return (
		<>
			<Container className="mt-10">
				<Title text="All pizza" size="lg" className="font-extrabold" />
			</Container>

			<TopBar />

			<Container className="pb-14 mt-10">
				<div className="flex gap-[80px]">
					<div className="w-[250px]">
						<Filters />
					</div>

					<div className="flex-1">
						<div className="flex flex-col gap-16">
							<ProductsGroupList
								title="Pizza"
								items={[
									{
										id: 1,
										name: 'Pizza Kebab',
										imageUrl:
											'https://media.dodostatic.net/image/r:1280x1280/11EEF343023FC8ADBE1D6EE4DF4D44C4.avif',
										items: [
											{
												price: 39,
											},
										],
									},
									{
										id: 2,
										name: 'Pizza Kebab',
										imageUrl:
											'https://media.dodostatic.net/image/r:1280x1280/11EEF343023FC8ADBE1D6EE4DF4D44C4.avif',
										items: [
											{
												price: 39,
											},
										],
									},
									,
									{
										id: 3,
										name: 'Pizza Kebab',
										imageUrl:
											'https://media.dodostatic.net/image/r:1280x1280/11EEF343023FC8ADBE1D6EE4DF4D44C4.avif',
										items: [
											{
												price: 39,
											},
										],
									},
									,
									{
										id: 4,
										name: 'Pizza Kebab',
										imageUrl:
											'https://media.dodostatic.net/image/r:1280x1280/11EEF343023FC8ADBE1D6EE4DF4D44C4.avif',
										items: [
											{
												price: 39,
											},
										],
									},
									,
									{
										id: 5,
										name: 'Pizza Kebab',
										imageUrl:
											'https://media.dodostatic.net/image/r:1280x1280/11EEF343023FC8ADBE1D6EE4DF4D44C4.avif',
										items: [
											{
												price: 39,
											},
										],
									},
								]}
								categoryId={1}
							/>
							<ProductsGroupList
								title="Breakfast"
								items={[
									{
										id: 1,
										name: 'Pizza Kebab',
										imageUrl:
											'https://media.dodostatic.net/image/r:1280x1280/11EEF343023FC8ADBE1D6EE4DF4D44C4.avif',
										items: [
											{
												price: 39,
											},
										],
									},
									{
										id: 2,
										name: 'Pizza Kebab',
										imageUrl:
											'https://media.dodostatic.net/image/r:1280x1280/11EEF343023FC8ADBE1D6EE4DF4D44C4.avif',
										items: [
											{
												price: 39,
											},
										],
									},
									,
									{
										id: 3,
										name: 'Pizza Kebab',
										imageUrl:
											'https://media.dodostatic.net/image/r:1280x1280/11EEF343023FC8ADBE1D6EE4DF4D44C4.avif',
										items: [
											{
												price: 39,
											},
										],
									},
									,
									{
										id: 4,
										name: 'Pizza Kebab',
										imageUrl:
											'https://media.dodostatic.net/image/r:1280x1280/11EEF343023FC8ADBE1D6EE4DF4D44C4.avif',
										items: [
											{
												price: 39,
											},
										],
									},
									,
									{
										id: 5,
										name: 'Pizza Kebab',
										imageUrl:
											'https://media.dodostatic.net/image/r:1280x1280/11EEF343023FC8ADBE1D6EE4DF4D44C4.avif',
										items: [
											{
												price: 39,
											},
										],
									},
								]}
								categoryId={2}
							/>
							{/* <ProductCard
								id={0}
								name={'Pizza Kebab'}
								price={39}
								imageUrl={
									'https://media.dodostatic.net/image/r:1280x1280/11EEF343023FC8ADBE1D6EE4DF4D44C4.avif'
								}
							/> */}
						</div>
					</div>
				</div>
			</Container>
		</>
	);
}
