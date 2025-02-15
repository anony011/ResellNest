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
						<div className="absolute top-2 right-0.5 bg-red-500 text-white px-3 py-1.5 rounded-full text-sm font-medium shadow-md z-10">
							Stok Habis
						</div>
					)}

					{product.thumbnail == null && (
						<div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center space-y-2">
							<p className="text-white">Gambar Tidak Tersedia</p>
						</div>
					)}

					{product.thumbnail == null ? (
						<img
							src={
								"https://images.unsplash.com/photo-1601724161617-928285222d5b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							}
							alt={"unsplash"}
							className="w-full h-full object-cover"
						/>
					) : (
						<img
							src={`https://res.cloudinary.com/draer5efs/image/upload/v1738468518/${product.thumbnail}.png`}
							alt={product.name}
							className="w-full h-full object-cover"
						/>
					)}
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
