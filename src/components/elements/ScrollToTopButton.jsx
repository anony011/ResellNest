import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > window.innerHeight) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	return (
		<button
			onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
			className={`fixed bottom-8 right-8 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-950 transition-colors duration-300 ${
				isVisible ? "opacity-100" : "opacity-0"
			}`}
			style={{ transition: "opacity 0.3s" }}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
			</svg>
		</button>
	);
};

export default ScrollToTopButton;
