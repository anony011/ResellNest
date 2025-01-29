import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const scrollToProduct = () => {
		const productSection = document.getElementById("product");
		if (productSection) {
			productSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<nav className="fixed top-0 left-0 w-full bg-transparent bg-opacity-70 text-white p-4 pt-10 flex justify-between items-center z-20">
			<button className="text-white text-2xl md:hidden" onClick={() => setIsOpen(!isOpen)}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={2}
					stroke="currentColor"
					className="size-8">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
					/>
				</svg>
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

			<span className="flex gap-3 items-center justify-center">
				{/* users */}
				<div className="">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={2}
						stroke="currentColor"
						className="size-8">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
						/>
					</svg>
				</div>
				{/* end users */}

				{/* keranjang */}
				<button onClick={scrollToProduct}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={2}
						stroke="currentColor"
						className="size-8">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
						/>
					</svg>
				</button>
				{/* end keranjang */}
			</span>

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
