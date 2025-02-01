import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<motion.footer
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="bg-gray-50 border-t">
			<div className="container mx-auto px-4 pt-12 pb-5">
				{/* Grid Footer */}
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
					{/* Kontak */}
					<div className="space-y-4">
						<h3 className="text-lg font-semibold text-gray-800">Kontak Kami</h3>
						<ul className="space-y-2">
							<li className="text-gray-600 text-sm flex items-center gap-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									viewBox="0 0 20 20"
									fill="currentColor">
									<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
									<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
								</svg>
								wahidh697@gmail.com
							</li>
							<li className="text-gray-600 text-sm flex items-center gap-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									viewBox="0 0 20 20"
									fill="currentColor">
									<path
										fillRule="evenodd"
										d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
										clipRule="evenodd"
									/>
								</svg>
								Kebumen, Jawa Tengah
							</li>
						</ul>
					</div>
				</div>

				{/* Copyright */}
				<div className="border-t pt-4 text-center">
					<p className="text-sm text-gray-600">
						&copy; {new Date().getFullYear()} <b>Waroengku.</b> All rights reserved.
					</p>
				</div>
			</div>
		</motion.footer>
	);
};

export default Footer;
