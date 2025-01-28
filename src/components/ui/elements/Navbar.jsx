import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 text-white p-4 flex justify-between items-center z-20">
			<div className="text-2xl font-bold">Logo</div>
			<button className="text-white text-2xl md:hidden" onClick={() => setIsOpen(!isOpen)}>
				☰
			</button>
			<div className="hidden md:flex space-x-6">
				<a href="#" className="hover:underline">
					Home
				</a>
				<a href="#" className="hover:underline">
					About
				</a>
				<a href="#" className="hover:underline">
					Services
				</a>
				<a href="#" className="hover:underline">
					Contact
				</a>
			</div>
			<motion.div
				className={`fixed top-0 left-0 h-full w-64 bg-black text-white flex flex-col items-center space-y-6 py-10 shadow-lg ${
					isOpen ? "block" : "hidden"
				}`}
				initial={{ x: "-100%" }}
				animate={{ x: isOpen ? "0%" : "-100%" }}
				transition={{ duration: 0.5 }}>
				<button className="self-end mr-6 text-2xl" onClick={() => setIsOpen(false)}>
					&times;
				</button>
				<a href="#" className="hover:underline text-lg">
					Home
				</a>
				<a href="#" className="hover:underline text-lg">
					About
				</a>
				<a href="#" className="hover:underline text-lg">
					Services
				</a>
				<a href="#" className="hover:underline text-lg">
					Contact
				</a>
			</motion.div>
		</nav>
	);
};

export default Navbar;
