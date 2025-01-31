import Navbar from "@/components/elements/homepage/Navbar";
import HeroSection from "@/components/elements/homepage/HeroSection";
import ProductSection from "@/components/elements/homepage/ProductSection";
import Footer from "@/components/elements/homepage/Footer";
import AboutSection from "@/components/elements/homepage/AboutSection";
import ScrollToTopButton from "../elements/ScrollToTopButton";

export default function HomePage({ products }) {
	return (
		<>
			{/* NAVBAR */}
			<Navbar />
			{/* END NAVBAR */}

			{/* HERO SECTION */}
			<HeroSection />
			{/* END HERO SECTION */}

			{/* ABOUT */}
			<AboutSection />
			{/* END ABOUT */}

			{/* PRODUCTS */}
			<div id="product">
				<ProductSection products={products} />
			</div>
			{/* END PRODUCTS */}

			{/* FOOTER */}
			<Footer />
			{/* END FOOTER */}

			{/* Back to Top Button */}
			<ScrollToTopButton />
			{/* end Back to Top Button */}
		</>
	);
}
