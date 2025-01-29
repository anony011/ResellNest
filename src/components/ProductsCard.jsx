import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProductsCard = ({ product }) => {
	return (
		<motion.div
			className="overflow-hidden w-full bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow flex flex-col"
			whileHover={{ scale: 1.03 }}
			transition={{ duration: 0.2 }}
			whileTap={{ scale: 0.97 }}>
			{/* Image Container */}
			<div className="aspect-square w-full overflow-hidden relative">
				{product.stock !== "tersedia" && (
					<div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center space-y-2">
						<p className="text-white text-xl font-medium">Stok Habis</p>
					</div>
				)}
				<img src={product.img} alt={product.name} className="w-full h-full object-cover" />
			</div>

			{/* Content Container */}
			<div className="p-4 flex flex-col flex-grow">
				{/* Product Name - Centered and improved spacing */}
				<Link to={`/products/${product.id}`} className="flex-grow">
					<h3 className="font-semibold text-lg text-center mb-4 line-clamp-2 hover:line-clamp-none">
						{product.name}
					</h3>
				</Link>

				{/* Stock Status */}
				<div className="mt-auto">
					{product.stock === "tersedia" ? (
						<Button
							variant="ghost"
							className="w-full bg-green-100/80 text-green-800 hover:bg-green-200/90 text-sm py-3"
							disabled>
							🟢 Tersedia
						</Button>
					) : (
						<Button
							variant="ghost"
							className="w-full bg-red-100/80 text-red-800 hover:bg-red-200/90 text-sm py-3"
							disabled>
							🔴 Habis
						</Button>
					)}
				</div>
			</div>
		</motion.div>
	);
};

export default ProductsCard;
