import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

const Product = ({ product }) => {
	return (
		<Card className="overflow-hidden">
			<div className="h-52 w-full overflow-hidden">
				<img src={product.img} alt={product.name} />
			</div>
			<div className="px-3 pb-2">
				<h3>{product.name}</h3>
			</div>
			<div className="px-3 pb-2">
				<Button variant="outline">Detail</Button>
			</div>
		</Card>
	);
};

export default Product;
