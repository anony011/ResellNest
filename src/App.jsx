import { useState } from "react";
import Navbar from "./components/ui/elements/Navbar";
import HeroSection from "./components/ui/elements/HeroSection";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			{/* NAVBAR */}
			<Navbar />
			{/* END NAVBAR */}

			{/* HERO SECTION */}
			<HeroSection />
			{/* END HERO SECTION */}
		</>
	);
}

export default App;
