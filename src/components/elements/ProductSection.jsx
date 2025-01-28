import Product from "../Product";
import { Button } from "../ui/button";

const ProductSection = ({ products }) => {
	return (
		<div className="container flex items-center justify-center flex-col gap-5 p-5 bg-gray-400/30">
			<span className="flex items-center justify-between w-full">
				<h1 className="font-semibold text-3xl"> Produk </h1>
				<Button variant="link">Lihat semua</Button>
			</span>
			<section className="grid grid-cols-2 gap-3 w-full">
				{products.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</section>
		</div>
	);
};

export default ProductSection;
