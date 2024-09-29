import { Container, PizzaImage, Title } from '@/shared/components/shared';
import { GroupVariants } from '@/shared/components/shared/group-variants';
import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';

export default async function ProductPage({
	params: { id },
}: {
	params: { id: string };
}) {
	const product = await prisma.product.findFirst({
		where: {
			id: Number(id),
		},
	});

	if (!product) {
		return notFound();
	}

	return (
		<Container className="flex flex-col my-10">
			<div className="flex flex-1">
				<PizzaImage imageUrl={product.imageUrl} size={30} />

				<div className="w-[490px] bg-[#F7F6F5] p-7">
					<Title
						size="md"
						text={product.name}
						className="font-extrabold mb-1"
					/>

					<p className="text-gray-400">
						Sint veniam ullam, libero perferendis minus placeat neque, porro,
						dolorem nam quam at. Unde exercitationem quibusdam at fugiat.
						Consectetur quaerat dicta alias sed modi ab eveniet ut possimus
						voluptatem. Ea odio ducimus illo distinctio repellendus dolorum
						numquam suscipit, ut, dolores eum voluptas obcaecati molestiae quo
						sint? Aperiam, quasi.
					</p>

					<GroupVariants
						items={[
							{ name: 'Small', value: '1' },
							{ name: 'Medium', value: '2' },
							{ name: 'Large', value: '3' },
						]}
					/>
				</div>
			</div>
		</Container>
	);
}
