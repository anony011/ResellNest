import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ProductsCard from "@/components/ProductsCard";
import Skeleton from "@/components/Skeleton";

const products = [
	{
		id: 1,
		name: "Sudah ready paket hampers mayora 138k",
		price: 10000,
		description: "Paket hampers mayora sudah ready stock, harga 138k",
		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
		stock: "tersedia",
	},
	{
		id: 2,
		name: "Product 2",
		price: 20000,
		description: "Paket hampers mayora sudah ready stock, harga 138k",
		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
		stock: "tersedia",
	},
	{
		id: 3,
		name: "Product 2",
		price: 20000,
		description: "Paket hampers mayora sudah ready stock, harga 138k",
		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
		stock: "tersedia",
	},
	{
		id: 4,
		name: "Product 2",
		price: 20000,
		description: "Paket hampers mayora sudah ready stock, harga 138k",
		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
	},
	{
		id: 5,
		name: "Product 2",
		price: 20000,
		description: "Paket hampers mayora sudah ready stock, harga 138k",
		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
		stock: "tidak tersedia",
	},
	{
		id: 6,
		name: "Product 2",
		price: 20000,
		description: "Paket hampers mayora sudah ready stock, harga 138k",
		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
		stock: "tersedia",
	},
];

const ItemDetail = () => {
	const { id } = useParams();
	const [item, setItem] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	};

	const scrollToTopCompat = () => {
		try {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		} catch (error) {
			window.scrollTo(0, 0);
		}
	};

	useEffect(() => {
		scrollToTopCompat();
	}, [id]);

	useEffect(() => {
		const fetchItem = async () => {
			try {
				setLoading(true);
				setItem(null);
				await new Promise((resolve) => setTimeout(resolve, 1000));

				const product = products.find((p) => p.id === parseInt(id));
				if (product) {
					setItem(product);
				} else {
					throw new Error("Item tidak ditemukan");
				}
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchItem();
	}, [id]);

	if (loading) {
		return <Skeleton />;
	}

	if (error) {
		return (
			<div className="p-8 text-center text-red-500">
				<p>Error: {error}</p>
				<Link to="/" className="text-blue-600 mt-4 inline-block">
					Kembali ke Beranda
				</Link>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
			<div className="flex justify-between items-center mb-8">
				<button onClick={goBack} className="flex items-center text-black">
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
				</button>
				<h1 className="text-3xl font-bold text-gray-800">Detail Produk</h1>
				<div></div>
			</div>

			<div className="max-w-6xl mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
					{/* Image Section */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden aspect-square">
						<img
							src={item.img}
							alt={item.name}
							className="w-full h-full object-cover object-center"
						/>
						{item.stock !== "tersedia" && (
							<div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1.5 rounded-full text-sm font-medium shadow-md z-10">
								Stok Habis
							</div>
						)}
					</motion.div>

					{/* Product Info Section */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						className="bg-white p-8 rounded-2xl shadow-lg">
						<h1 className="text-4xl font-bold text-gray-900 mb-6">{item.name}</h1>

						<div className="mb-8">
							<p className="text-lg text-gray-600 leading-relaxed">{item.description}</p>
						</div>

						<div className="space-y-6">
							<div className="bg-blue-50 p-6 rounded-xl">
								<div className="flex justify-between items-center">
									<div>
										<p className="text-sm text-gray-500 mb-1">Harga Satuan</p>
										<p className="text-3xl font-bold text-blue-600">
											Rp {item.price.toLocaleString()}
										</p>
									</div>
									<span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
										{item.stock === "tersedia" ? "🟢 Tersedia" : "🔴 Habis"}
									</span>
								</div>
							</div>

							<div className="bg-gray-50 p-6 rounded-xl">
								<h3 className="text-lg font-semibold text-gray-800 mb-3">Detail Produk</h3>
								<dl className="grid grid-cols-2 gap-4">
									<div>
										<dt className="text-sm text-gray-500">ID Produk</dt>
										<dd className="font-medium text-gray-900">#{item.id}</dd>
									</div>
									<div>
										<dt className="text-sm text-gray-500">Kategori</dt>
										<dd className="font-medium text-gray-900">Hampers</dd>
									</div>
								</dl>
							</div>

							{item.stock === "tersedia" && (
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="w-full bg-black text-white py-4 px-6 rounded-xl font-semibold text-lg transition-colors shadow-md">
									<a
										href={`https://wa.me/${
											process.env.REACT_APP_WHATSAPP_NUMBER
										}?text=${encodeURIComponent(
											`Permisi kak, untuk produk ${item.name} apakah masih ada?`
										)}`}
										target="_blank"
										rel="noopener noreferrer">
										Pesan
									</a>
								</motion.button>
							)}
						</div>
					</motion.div>
				</div>

				{/* Related Products Section */}
				<div className="mb-12">
					<h2 className="text-2xl font-bold text-gray-900 mb-6">Produk Terkait</h2>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
						{products
							.filter((p) => p.id !== item.id)
							.slice(0, 4)
							.map((product) => (
								<ProductsCard key={product.id} product={product} />
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;
