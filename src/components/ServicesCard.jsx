import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
	return (
		<motion.div
			className="overflow-hidden w-full bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow flex flex-col"
			whileHover={{ scale: 1.03 }}
			transition={{ duration: 0.2 }}
			whileTap={{ scale: 0.97 }}>
			{/* Image Container */}
			<div className="aspect-video w-full overflow-hidden relative">
				{!service.available && (
					<div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center space-y-2">
						<p className="text-white text-xl font-medium">Tidak Tersedia</p>
					</div>
				)}
				<img src={service.image} alt={service.name} className="w-full h-full object-cover" />
			</div>

			{/* Content Container */}
			<div className="p-4 flex flex-col flex-grow">
				<div className="flex-grow">
					<h3 className="font-semibold text-lg text-center mb-2">{service.name}</h3>
					<p className="text-gray-600 text-sm line-clamp-3 mb-4">{service.description}</p>
				</div>

				<div className="mt-auto space-y-2">
					<div className="flex justify-between items-center text-sm">
						<span className="text-gray-500">Durasi:</span>
						<span className="font-medium">{service.duration}</span>
					</div>
					<div className="flex justify-between items-center text-sm">
						<span className="text-gray-500">Harga:</span>
						<span className="font-medium text-blue-600">Rp{service.price.toLocaleString()}</span>
					</div>

					{service.available ? (
						<Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white" asChild>
							<Link to={`/`}>Pesan Sekarang</Link>
						</Button>
					) : (
						<Button
							variant="ghost"
							className="w-full bg-gray-100 text-gray-500 hover:bg-gray-200"
							disabled>
							Sementara Tidak Tersedia
						</Button>
					)}
				</div>
			</div>
		</motion.div>
	);
};

export default ServicesCard;
