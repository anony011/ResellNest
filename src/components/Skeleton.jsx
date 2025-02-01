import { motion } from "framer-motion";

const Skeleton = () => (
	<div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
		<div className="max-w-6xl mx-auto">
			{/* Back Button Skeleton */}
			<div className="flex items-center mb-8 justify-between">
				<div className="h-6 w-6 mr-2 bg-gray-200 rounded-full"></div>
				<div className="h-4 w-24 bg-gray-200 rounded"></div>
				<div className="h-6 w-6 mr-2 bg-gray-200 rounded-full"></div>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
				{/* Image Section Skeleton */}
				<motion.div className="relative bg-gray-200 rounded-2xl overflow-hidden aspect-square animate-pulse">
					<div className="w-full h-full bg-gray-300"></div>
				</motion.div>

				{/* Product Info Section Skeleton */}
				<div className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
					<div className="h-10 bg-gray-200 rounded w-3/4 mb-6"></div>
					<div className="space-y-4">
						<div className="h-4 bg-gray-200 rounded w-full"></div>
						<div className="h-4 bg-gray-200 rounded w-2/3"></div>
					</div>

					{/* <div className="bg-gray-200 p-6 rounded-xl animate-pulse">
						<div className="h-8 bg-gray-300 rounded w-1/3 mb-2"></div>
						<div className="h-10 bg-gray-300 rounded w-1/2"></div>
					</div> */}

					<div className="w-full mb-2">
						<div className="p-3 rounded-lg bg-gray-200 mb-2 animate-pluse w-1/2"></div>
						<div className="grid grid-cols-3 gap-2">
							<div className="bg-gray-50 p-2 rounded-lg text-center border">
								<div className="p-1 rounded-lg bg-gray-200"></div>
							</div>
							<div className="bg-gray-50 p-2 rounded-lg text-center border">
								<div className="p-1 rounded-lg bg-gray-200"></div>
							</div>
						</div>
					</div>

					<span className="grid gap-3 lg:gap-8">
						<div className="p-3 rounded-lg bg-gray-200 animate-pluse w-1/2"></div>
						<div className="bg-gray-200 p-6 rounded-xl animate-pulse">
							<div className="h-6 bg-gray-300 rounded w-1/4 mb-4"></div>
							<div className="grid grid-cols-2 gap-4">
								<div className="h-4 bg-gray-300 rounded"></div>
								<div className="h-4 bg-gray-300 rounded"></div>
							</div>
						</div>
					</span>

					<div className="h-14 bg-gray-200 rounded-xl w-full"></div>
				</div>
			</div>
		</div>
	</div>
);

export default Skeleton;
