import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
	const scrollToProduct = () => {
		const productSection = document.getElementById("product");
		if (productSection) {
			productSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div
			className="relative h-screen w-full bg-cover bg-center"
			style={{ backgroundImage: `url('/heroImage.jpg')` }}>
			<div className="absolute inset-0 bg-black bg-opacity-50"></div>
			<div className="relative z-10 flex flex-col items-start justify-center h-full text-white px-4">
				<motion.h1
					className="text-6xl font-bold mb-4 "
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}>
					Waroengku
				</motion.h1>
				<motion.p
					className="text-lg md:text-xl mb-6"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}>
					<b>Waroengku</b> hadir untuk memenuhi segala kebutuhan Anda! Kami menyediakan beragam
					barang berkualitas yang mungkin sedang Anda cari dan butuhkan saat ini. Temukan solusi
					belanja praktis dan terpercaya hanya di Waroengku!
				</motion.p>
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					whileTap={{ scale: 0.97 }}
					transition={{ duration: 0.8, delay: 0.4 }}>
					<Button
						size="lg"
						onClick={scrollToProduct}
						className="py-6 rounded-full text-lg font-semibiold bg-transparent border">
						Lihat Barang
					</Button>
				</motion.div>
			</div>
		</div>
	);
};

export default HeroSection;
