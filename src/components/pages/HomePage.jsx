import Navbar from "@/components/elements/Navbar";
import HeroSection from "@/components/elements/HeroSection";
import ProductSection from "@/components/elements/ProductSection";
import Footer from "../elements/Footer";

const products = [
	{
		id: 1,
		name: "Product 1",
		price: 10000,
		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
	},
	{
		id: 2,
		name: "Product 2",
		price: 20000,
		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
	},
	{
		id: 3,
		name: "Product 2",
		price: 20000,
		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
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
	},
	{
		id: 6,
		name: "Product 2",
		price: 20000,
		img: "https://vignette.vivathemes.com/wp-content/uploads/2022/10/olena-sergienko-gxKL334bUK4-unsplash-800x800.jpg",
	},
];

export default function HomePage() {
	return (
		<>
			{/* NAVBAR */}
			<Navbar />
			{/* END NAVBAR */}

			{/* HERO SECTION */}
			<HeroSection />
			{/* END HERO SECTION */}

			{/* PRODUCTS */}
			<ProductSection products={products} />
			{/* END PRODUCTS */}

			{/* FOOTER */}
			<Footer />
			{/* END FOOTER */}
		</>
	);
}
