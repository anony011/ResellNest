import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProductsCard from "@/components/ProductsCard";
import Skeleton from "@/components/Skeleton";
import axios from "axios";

// const products = [
// 	{
// 		id: 1,
// 		name: "Sudah ready paket hampers mayora 138k",
// 		price: 10000,
// 		description: "Paket hampers mayora sudah ready stock, harga 138k",
// 		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 2,
// 		name: "Product 2",
// 		price: 20000,
// 		description: "Paket hampers mayora sudah ready stock, harga 138k",
// 		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 3,
// 		name: "Product 2",
// 		price: 20000,
// 		description: "Paket hampers mayora sudah ready stock, harga 138k",
// 		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 4,
// 		name: "Product 2",
// 		price: 20000,
// 		description: "Paket hampers mayora sudah ready stock, harga 138k",
// 		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
// 	},
// 	{
// 		id: 5,
// 		name: "Product 2",
// 		price: 20000,
// 		description: "Paket hampers mayora sudah ready stock, harga 138k",
// 		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
// 		stock: "tidak tersedia",
// 	},
// 	{
// 		id: 6,
// 		name: "Product 2",
// 		price: 20000,
// 		description: "Paket hampers mayora sudah ready stock, harga 138k",
// 		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
// 		stock: "tersedia",
// 	},
// ];

const ItemDetail = () => {
	const { slug } = useParams();
	const [product, setProduct] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

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
	}, [slug]);

	useEffect(() => {
		const fetchPosts = async () => {
			setLoading(true);
			setProduct(null);
			await new Promise((resolve) => setTimeout(resolve, 1000));

			try {
				const response = await axios.get(`api/product/${slug}`);
				setProduct(response.data.data);
			} catch (error) {
				console.error("Gagal mengambil data:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchPosts();
	}, [slug]);

	useEffect(() => {
		console.log(product);
		console.log(slug);
	}, [product, slug]);

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
				<Link to={"/products"} className="flex items-center text-black">
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
				<h1 className="text-xl font-bold text-gray-800">Detail Produk</h1>
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

			<div className="max-w-6xl mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
					{/* Image Section */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden aspect-square">
						<img
							src={product.thumbnail}
							alt={product.name}
							className="w-full h-full object-cover object-center"
						/>
						{product.status !== 1 && (
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
						<h1 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h1>

						<div className="mb-8">
							<p className="text-gray-600">{product.description}</p>
						</div>

						<div className="grid gap-5 lg:gap-8">
							<span>
								<p className="text-sm text-gray-500 mb-2">Harga Satuan</p>
								<div className="bg-blue-50 p-6 rounded-xl">
									<div className="flex justify-between items-center">
										<div>
											<p className="text-xl font-bold text-blue-600">
												{new Intl.NumberFormat("id-ID", {
													style: "currency",
													currency: "IDR",
												}).format(product.price)}
											</p>
										</div>
										<span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
											{product.item === 1 ? "🟢 Tersedia" : "🔴 Habis"}
										</span>
									</div>
								</div>
							</span>

							<div className="hidden lg:flex bg-gray-50 p-6 rounded-xl">
								<span className="w-full">
									<h3 className="text-lg font-semibold text-gray-800 mb-3">Detail Produk</h3>
									<dl className="grid grid-cols-2 gap-4 ">
										<div>
											<dt className="text-sm text-gray-500">ID Produk</dt>
											<dd className="font-medium text-gray-900">#{product.id}</dd>
										</div>
										<div>
											<dt className="text-sm text-gray-500">Kategori</dt>
											<dd className="font-medium text-gray-900">Hampers</dd>
										</div>
									</dl>
								</span>
							</div>

							{item.stock === "tersedia" && (
								<a
									href={`https://wa.me/${
										import.meta.env.VITE_WHATSAPP_NUMBER
									}?text=${encodeURIComponent(
										`Permisi kak, untuk produk ${product.name} apakah masih ada?`
									)}`}
									target="_blank"
									rel="noopener noreferrer">
									<motion.button
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										className="w-full bg-black text-white py-2 lg:py-4 rounded-xl font-semibold transition-colors shadow-md">
										Pesan
									</motion.button>
								</a>
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
