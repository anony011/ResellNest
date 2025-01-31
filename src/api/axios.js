import axios from "axios";

const instance = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
		"Cache-Control": "no-store",
	},
});

instance.interceptors.request.use((config) => {
	const apiKey = import.meta.env.VITE_API_KEY;
	if (apiKey) {
		config.headers["X-API-KEY"] = apiKey;
	}

	return config;
});

export default instance;
