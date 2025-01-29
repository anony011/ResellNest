import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
	const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

	return (
		<div ref={ref} className="w-full h-screen overflow-hidden relative grid items-center">
			{/* Background Image dengan Paralax */}
			<motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
				<img
					src="./heroImage.jpg"
					alt="About background"
					className="w-full h-full object-cover object-center"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40" />
			</motion.div>

			{/* Konten */}
			<motion.div style={{ y: yText }} className="relative z-10 p-6 text-center space-y-6">
				<h2 className="text-3xl md:text-4xl font-bold text-white">Tentang Kami</h2>

				<div className="space-y-4 max-w-2xl mx-auto">
					<p className="text-gray-200 text-sm leading-relaxed">
						Kami adalah tim profesional yang berdedikasi untuk memberikan solusi terbaik dalam
						industri kreatif. Dengan pengalaman lebih dari 5 tahun, kami terus berinovasi untuk
						memenuhi kebutuhan klien.
					</p>

					<div className="grid grid-cols-2 gap-4 mt-6">
						<div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
							<h3 className="text-2xl font-bold text-white">5+</h3>
							<p className="text-gray-300 text-sm">Tahun Pengalaman</p>
						</div>
						<div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
							<h3 className="text-2xl font-bold text-white">100+</h3>
							<p className="text-gray-300 text-sm">Proyek Selesai</p>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default AboutSection;
