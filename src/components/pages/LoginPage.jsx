import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const LoginPage = () => {
	return (
		<div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
			<motion.div
				className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden border"
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}>
				{/* Header */}
				<div className="pt-10">
					<h2 className="text-2xl font-bold  text-center">Waroengku!</h2>
					<p className="text-sm  text-center mt-2">Login dulu buat konfirmasi</p>
				</div>

				{/* Form Login */}
				<div className="p-6">
					<form>
						<div className="mb-4">
							<label className="block text-sm font-medium text-gray-700">Email</label>
							<Input
								type="email"
								className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
								placeholder="email@example.com"
							/>
						</div>
						<div className="mb-6">
							<label className="block text-sm font-medium text-gray-700">Password</label>
							<Input
								type="password"
								className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
								placeholder="********"
							/>
						</div>
						<div className="flex items-center justify-center gap-2">
							<motion.span
								className="w-full"
								whileTap={{ scale: 0.95 }}
								transition={{ duration: 0.1 }}>
								<Link to={"/"} className="">
									<Button className="w-full py-2 rounded-lg">Kembali</Button>
								</Link>
							</motion.span>
							<motion.span
								className="w-full"
								whileTap={{ scale: 0.95 }}
								transition={{ duration: 0.1 }}>
								<Button type="submit" className="w-full py-2 rounded-lg">
									Login
								</Button>
							</motion.span>
						</div>
					</form>
				</div>
			</motion.div>
		</div>
	);
};

export default LoginPage;
