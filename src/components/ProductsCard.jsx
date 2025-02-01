import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProductsCard = ({ product }) => {
	return (
		<motion.div
			className="overflow-hidden w-full bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow flex flex-col"
			whileHover={{ scale: 1.03 }}
			transition={{ duration: 0.2 }}
			whileTap={{ scale: 0.97 }}>
			<Link to={`/products/${product.slug}`}>
				{/* Image Container */}
				<div className="aspect-square w-full overflow-hidden relative">
					{product.status !== 1 && (
						<div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center space-y-2">
							<p className="text-white text-xl font-medium">Stok Habis</p>
						</div>
					)}
					<img src={product.thumbnail} alt={product.name} className="w-full h-full object-cover" />
				</div>

				{/* Content Container */}
				<div className="p-2 flex flex-col flex-grow">
					{/* Product Name - Centered and improved spacing */}
					<h3 className="mb-4 line-clamp-2 hover:line-clamp-none text-gray-800 font-semibold text-sm">
						{product.name.charAt(0).toUpperCase() + product.name.slice(1)}
					</h3>

					{/* Stock Status */}
					<div className="mt-auto">
						<p className="text-sm text-blue-500 font-semibold">
							{new Intl.NumberFormat("id-ID", {
								style: "currency",
								currency: "IDR",
							}).format(product.price)}
						</p>
					</div>
				</div>
			</Link>
		</motion.div>
	);
};

export default ProductsCard;
