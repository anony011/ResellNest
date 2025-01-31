import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import ProductsPage from "./components/pages/ProductsPage";
import ProductDetail from "./components/pages/DetailsProductPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import axios from "./api/axios";

import { useEffect, useState } from "react";

// const products = [
// 	{
// 		id: 1,
// 		name: "Indomie Goreng Rendang",
// 		price: 3000,
// 		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 2,
// 		name: "Aqua Botol 600ml",
// 		price: 5000,
// 		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 3,
// 		name: "Pocari Sweat 500ml",
// 		price: 8000,
// 		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 4,
// 		name: "Lays Potato Chips Original",
// 		price: 12000,
// 		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 5,
// 		name: "Mie Sedap Soto",
// 		price: 3000,
// 		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
// 		stock: "tidak tersedia",
// 	},
// 	{
// 		id: 6,
// 		name: "Teh Botol Sosro 500ml",
// 		price: 6000,
// 		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 7,
// 		name: "Kopiko Brown Coffee",
// 		price: 2000,
// 		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 8,
// 		name: "Dettol Hand Sanitizer 50ml",
// 		price: 15000,
// 		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 9,
// 		name: "Rinso Detergent Bubuk 1kg",
// 		price: 25000,
// 		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 10,
// 		name: "Lifebuoy Body Wash 250ml",
// 		price: 18000,
// 		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 11,
// 		name: "Sari Roti Tawar",
// 		price: 15000,
// 		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 12,
// 		name: "Nestle Dancow 1+",
// 		price: 50000,
// 		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 13,
// 		name: "Frisian Flag Susu Kental Manis",
// 		price: 10000,
// 		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 14,
// 		name: "Pepsodent Pasta Gigi",
// 		price: 12000,
// 		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 15,
// 		name: "Sunlight Pencuci Piring",
// 		price: 10000,
// 		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 16,
// 		name: "Minyak Goreng Bimoli 2L",
// 		price: 35000,
// 		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 17,
// 		name: "Tropicana Slim Diabetasol",
// 		price: 40000,
// 		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 18,
// 		name: "Kapal Api Special Mix Coffee",
// 		price: 15000,
// 		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 19,
// 		name: "Oreo Original",
// 		price: 10000,
// 		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 20,
// 		name: "Chitato Potato Chips",
// 		price: 8000,
// 		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 21,
// 		name: "Milo Activ-Go",
// 		price: 20000,
// 		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 22,
// 		name: "Royco Bumbu Masak",
// 		price: 5000,
// 		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 23,
// 		name: "SariWangi Teh Celup",
// 		price: 7000,
// 		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 24,
// 		name: "Indomilk Susu UHT",
// 		price: 8000,
// 		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 25,
// 		name: "ABC Kecap Manis",
// 		price: 10000,
// 		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 26,
// 		name: "Garnier Micellar Water",
// 		price: 45000,
// 		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 27,
// 		name: "Vaseline Body Lotion",
// 		price: 30000,
// 		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 28,
// 		name: "Head & Shoulders Shampoo",
// 		price: 35000,
// 		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 29,
// 		name: "Nivea Deodorant Roll-On",
// 		price: 25000,
// 		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 30,
// 		name: "Colgate Toothbrush",
// 		price: 10000,
// 		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 31,
// 		name: "Samsung Galaxy S23",
// 		price: 12000000,
// 		img: "https://example.com/samsung-s23.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 32,
// 		name: "Xiaomi Redmi Note 12",
// 		price: 4000000,
// 		img: "https://example.com/redmi-note-12.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 33,
// 		name: "Apple iPhone 14",
// 		price: 15000000,
// 		img: "https://example.com/iphone-14.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 34,
// 		name: "Sony WH-1000XM5 Headphone",
// 		price: 5000000,
// 		img: "https://example.com/sony-headphone.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 35,
// 		name: "Logitech MX Master 3",
// 		price: 1500000,
// 		img: "https://example.com/logitech-mx.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 36,
// 		name: "Razer BlackWidow V3",
// 		price: 2000000,
// 		img: "https://example.com/razer-keyboard.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 37,
// 		name: "ASUS ROG Zephyrus G14",
// 		price: 25000000,
// 		img: "https://example.com/asus-rog.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 38,
// 		name: "Dell XPS 15",
// 		price: 30000000,
// 		img: "https://example.com/dell-xps.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 39,
// 		name: "MacBook Pro M2",
// 		price: 35000000,
// 		img: "https://example.com/macbook-pro.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 40,
// 		name: "Acer Predator Helios 300",
// 		price: 20000000,
// 		img: "https://example.com/acer-predator.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 41,
// 		name: "Samsung 4K Smart TV",
// 		price: 10000000,
// 		img: "https://example.com/samsung-tv.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 42,
// 		name: "Sony PlayStation 5",
// 		price: 9000000,
// 		img: "https://example.com/ps5.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 43,
// 		name: "Xbox Series X",
// 		price: 8500000,
// 		img: "https://example.com/xbox-series-x.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 44,
// 		name: "Nintendo Switch OLED",
// 		price: 6000000,
// 		img: "https://example.com/nintendo-switch.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 45,
// 		name: "GoPro Hero 11",
// 		price: 7000000,
// 		img: "https://example.com/gopro-11.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 46,
// 		name: "Canon EOS R5",
// 		price: 55000000,
// 		img: "https://example.com/canon-r5.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 47,
// 		name: "Nikon Z9",
// 		price: 60000000,
// 		img: "https://example.com/nikon-z9.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 48,
// 		name: "Bose QuietComfort Earbuds",
// 		price: 3500000,
// 		img: "https://example.com/bose-earbuds.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 49,
// 		name: "Apple AirPods Pro 2",
// 		price: 4000000,
// 		img: "https://example.com/airpods-pro.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 50,
// 		name: "JBL Flip 6 Speaker",
// 		price: 2000000,
// 		img: "https://example.com/jbl-flip6.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 51,
// 		name: "Samsung Galaxy Watch 5",
// 		price: 3500000,
// 		img: "https://example.com/galaxy-watch5.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 52,
// 		name: "Apple Watch Series 8",
// 		price: 6000000,
// 		img: "https://example.com/apple-watch8.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 53,
// 		name: "Fitbit Charge 5",
// 		price: 2500000,
// 		img: "https://example.com/fitbit-charge5.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 54,
// 		name: "Raspberry Pi 4",
// 		price: 1500000,
// 		img: "https://example.com/raspberry-pi4.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 55,
// 		name: "NVIDIA RTX 4090",
// 		price: 30000000,
// 		img: "https://example.com/rtx-4090.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 56,
// 		name: "AMD Ryzen 9 7950X",
// 		price: 12000000,
// 		img: "https://example.com/ryzen-9.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 57,
// 		name: "Intel Core i9-13900K",
// 		price: 11000000,
// 		img: "https://example.com/i9-13900k.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 58,
// 		name: "Corsair Vengeance 32GB RAM",
// 		price: 3000000,
// 		img: "https://example.com/corsair-ram.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 59,
// 		name: "Seagate 2TB External HDD",
// 		price: 1500000,
// 		img: "https://example.com/seagate-hdd.jpg",
// 		stock: "tersedia",
// 	},
// 	{
// 		id: 60,
// 		name: "WD Black 1TB NVMe SSD",
// 		price: 2500000,
// 		img: "https://example.com/wd-black.jpg",
// 		stock: "tersedia",
// 	},
// ];

function App() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await axios.get("api/products");
				setProducts(response.data.data);
				console.log(response.data.data);
			} catch (error) {
				console.error("Gagal mengambil data:", error);
			}
		};

		fetchPosts();
	}, []);

	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage products={products} />} />
				<Route path="/products" element={<ProductsPage products={products} />} />
				<Route path="/products/:slug" element={<ProductDetail />} />

				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</Router>
	);
}

export default App;
