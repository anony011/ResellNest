import { motion } from "framer-motion";

const HeroSection = () => {
	return (
		<div
			className="relative h-screen w-full bg-cover bg-center"
			style={{ backgroundImage: `url('/heroImage.jpg')` }}>
			<div className="absolute inset-0 bg-black bg-opacity-50"></div>
			<div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
				<motion.h1
					className="text-4xl md:text-6xl font-bold mb-4"
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}>
					Welcome to Our Website
				</motion.h1>
				<motion.p
					className="text-lg md:text-xl mb-6"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}>
					Discover amazing content and connect with us today.
				</motion.p>
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, delay: 0.4 }}>
					<button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg">
						Get Started
					</button>
				</motion.div>
			</div>
		</div>
	);
};

export default HeroSection;
