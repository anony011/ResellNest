const DetailsProductPage = () => {
	const { id } = useParams();
	const product = products.find((product) => product.id === Number(id));

	return (
		<div>
			<h1>{product.name}</h1>
			<p>{product.description}</p>
			<p>{product.price}</p>
		</div>
	);
};

export default DetailsProductPage;
