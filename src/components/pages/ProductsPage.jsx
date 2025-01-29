import { Link } from "react-router-dom";
import Product from "@/components/ProductsCard";

const ProductsPage = ({ products }) => {
	return (
		<div className="container mx-auto px-4 py-8">
			<div className="flex justify-between items-center mb-8">
				<Link to="/" className="flex items-center text-blue-600 hover:text-blue-800">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 mr-2"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M10 19l-7-7m0 0l7-7m-7 7h18"
						/>
					</svg>
					Kembali
				</Link>
				<h1 className="text-3xl font-bold text-gray-800">Semua Produk</h1>
				<div></div> {/* Untuk mengisi ruang kosong */}
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{products.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</div>
		</div>
	);
};

export default ProductsPage;
