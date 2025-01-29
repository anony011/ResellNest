import ServicesCard from "../../ServicesCard";

const ServiceSection = ({ services }) => {
	return (
		<section className="container mx-auto px-4 py-8">
			{/* Header */}
			<div className="text-center mb-8">
				<h2 className="text-3xl font-bold text-gray-800 mb-2">Layanan Kami</h2>
				<p className="text-gray-600">Temukan layanan profesional terbaik untuk kebutuhan Anda</p>
			</div>

			{/* Grid Layanan */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
				{services.slice(0, 3).map((service) => (
					<ServicesCard key={service.id} service={service} />
				))}
			</div>
		</section>
	);
};

export default ServiceSection;
