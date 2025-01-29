import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	const scrollToProduct = () => {
		const productSection = document.getElementById("product");
		if (productSection) {
			productSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	// Efek untuk mendeteksi scroll
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > window.innerHeight) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`fixed top-0 left-0 w-full ${
				isScrolled
					? "backdrop-blur-md bg-opacity-70 bg-black pt-5 rounded-b-lg justify-between"
					: "bg-transparent pt-10 justify-end"
			} text-white p-4 flex items-center z-20 transition-all duration-300`}>
			<p className={`${isScrolled ? "flex" : "hidden "} font-semibold`}>Waroengku</p>
			{/* Ikon User dan Keranjang */}
			<span className="flex gap-3 items-center justify-center">
				{/* Ikon User */}
				<Link className="hover:scale-110 transition-transform duration-200" to={"/login"}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={2}
						stroke="currentColor"
						className="size-6">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
						/>
					</svg>
				</Link>

				{/* Ikon Keranjang */}
				<button
					onClick={scrollToProduct}
					className="hover:scale-110 transition-transform duration-200">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={2}
						stroke="currentColor"
						className="size-6">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
						/>
					</svg>
				</button>
			</span>
		</nav>
	);
};

export default Navbar;
