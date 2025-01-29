import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import ProductsPage from "./components/pages/ProductsPage";
import ProductDetail from "./components/pages/DetailsProductPage";

const products = [
	{
		id: 1,
		name: "Sudah ready paket hampers mayora 138k",
		price: 10000,
		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
		stock: "tersedia",
	},
	{
		id: 2,
		name: "Product 2",
		price: 20000,
		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
		stock: "tersedia",
	},
	{
		id: 3,
		name: "Product 2",
		price: 20000,
		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
		stock: "tersedia",
	},
	{
		id: 4,
		name: "Product 2",
		price: 20000,
		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
	},
	{
		id: 5,
		name: "Product 2",
		price: 20000,
		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
		stock: "tidak tersedia",
	},
	{
		id: 6,
		name: "Product 2",
		price: 20000,
		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
		stock: "tersedia",
	},
];

const services = [
	{
		id: 1,
		name: "Konsultasi Teknis",
		description: "Layanan konsultasi teknis profesional untuk solusi bisnis Anda",
		price: 500000,
		duration: "1-2 Jam",
		image:
			"https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
		available: true,
	},
];

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage products={products} services={services} />} />
				<Route path="/products" element={<ProductsPage products={products} />} />
				<Route path="/products/:id" element={<ProductDetail />} />
			</Routes>
		</Router>
	);
}

export default App;
