import ProductsCard from "@/components/ProductsCard";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductSection = ({ products }) => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (products.length > 0) {
			setIsLoading(false);
		}
	}, [products]);

	return (
		<section className="mx-auto px-4 py-8 grid gap-2">
			{/* Header */}
			<div className="text-center mb-8">
				<h2 className="text-2xl font-bold text-gray-800 mb-2">Produk</h2>
			</div>

			{isLoading ? (
				<div className="h-[30rem] flex items-center justify-center">
					<p className="text-gray-700">
						{products.length === 0 && "Sabar ya, sedang memuat produk..."}
					</p>
				</div>
			) : (
				<>
					{products == null ||
						(products == undefined && (
							<div className="h-[30rem] flex items-center justify-center">
								<p className="text-gray-700">Belum Ada Produk</p>
							</div>
						))}

					{products.length > 4 && (
						<div className="flex justify-between items-center w-full">
							<p className="text-gray-700 font-semibold">Produk terbaru</p>
							{/* Tombol Lihat Lainnya */}

							<div className="text-center">
								<Link to="/products">
									<Button variant="link" className="text-blue-500">
										Lihat Lainnya
									</Button>
								</Link>
							</div>
						</div>
					)}

					<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
						{products.length > 4
							? products
									.slice(0, 4)
									.map((product) => <ProductsCard key={product.id} product={product} />)
							: products.map((product) => <ProductsCard key={product.id} product={product} />)}
					</div>
				</>
			)}
		</section>
	);
};

export default ProductSection;
