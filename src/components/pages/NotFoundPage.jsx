import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1); // Kembali ke halaman sebelumnya
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-4">
			<motion.div
				className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden border p-8 text-center"
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}>
				{/* Icon atau Gambar */}
				<motion.div
					className="mb-6"
					initial={{ y: -50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.2, duration: 0.5 }}>
					<svg
						className="w-24 h-24 mx-auto text-gray-700"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				</motion.div>

				{/* Judul */}
				<motion.h1
					className="text-4xl font-bold text-gray-800 mb-4"
					initial={{ y: -20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.4, duration: 0.5 }}>
					Ga ada bang
				</motion.h1>

				{/* Pesan */}
				<motion.p
					className="text-gray-600 mb-8"
					initial={{ y: -20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.6, duration: 0.5 }}>
					Maaf, halaman yang Anda cari tidak ada, ga usah aneh-aneh :D
				</motion.p>

				{/* Tombol Kembali */}
				<motion.div
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.8, duration: 0.5 }}>
					<Button
						onClick={goBack}
						className="w-full max-w-xs mx-auto py-2 "
						whileTap={{ scale: 0.95 }}>
						Kembali
					</Button>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default NotFoundPage;
