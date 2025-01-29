import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import ProductsCard from "@/components/ProductsCard";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const ProductsPage = ({ products }) => {
	const [searchQuery, setSearchQuery] = useState("");
	const [filteredProducts, setFilteredProducts] = useState(products);

	const handleSearch = () => {
		if (!searchQuery.trim()) {
			setFilteredProducts(products);
			return;
		}

		const filtered = products.filter(
			(product) =>
				product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
				product.description?.toLowerCase().includes(searchQuery.toLowerCase())
		);

		setFilteredProducts(filtered);
	};

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			handleSearch();
		}
	};

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="flex justify-between items-center mb-8">
				<Link to="/" className="flex items-center text-black">
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
				</Link>
				<h1 className="text-xl font-bold text-gray-800">Semua Produk</h1>
				{/* Ikon User */}
				<Link className="hover:scale-110 transition-transform duration-200" to={"/"}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-6">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
						/>
					</svg>
				</Link>
			</div>

			<div className="flex gap-2 justify-center items-center py-3">
				<Input
					type="text"
					placeholder="Cari Barang"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					onKeyDown={handleKeyPress}
				/>
				<motion.div
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					transition={{ type: "spring", stiffness: 400, damping: 10 }}
					onClick={handleSearch}>
					<Button>Cari</Button>
				</motion.div>
			</div>

			<div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
				<AnimatePresence mode="wait">
					{filteredProducts.length > 0 ? (
						filteredProducts.map((product) => (
							<motion.div
								key={product.id}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{ duration: 0.3 }}>
								<ProductsCard product={product} />
							</motion.div>
						))
					) : (
						<motion.div
							className="col-span-full text-center py-12"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5 }}>
							<p className="text-xl font-semibold text-gray-500">Barang tidak ditemukan Boss..</p>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
};

export default ProductsPage;
