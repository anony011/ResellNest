import { motion, AnimatePresence } from "framer-motion";

const ProductModal = ({ product, onClose }) => {
	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
				onClick={onClose}>
				<motion.div
					initial={{ scale: 0.8, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					exit={{ scale: 0.8, opacity: 0 }}
					className="bg-white rounded-xl max-w-2xl w-full p-6"
					onClick={(e) => e.stopPropagation()}>
					<div className="flex gap-6">
						<img
							src={product.image}
							alt={product.name}
							className="w-64 h-64 object-cover rounded-lg"
						/>

						<div className="flex-1">
							<h2 className="text-2xl font-bold mb-2">{product.name}</h2>
							<p className="text-gray-600 mb-4">{product.description}</p>

							<div className="space-y-2">
								<p className="text-lg font-semibold">Price: ${product.price}</p>
								<p className="text-sm">Category: {product.category}</p>
								<p className="text-sm">Stock: {product.stock} left</p>
							</div>

							<button
								onClick={onClose}
								className="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
								Close
							</button>
						</div>
					</div>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
};

export default ProductModal;
