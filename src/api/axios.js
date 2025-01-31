import axios from "axios";

const instance = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});

instance.interceptors.request.use((config) => {
	const token = document.cookie
		.split("; ")
		.find((row) => row.startsWith("XSRF-TOKEN="))
		?.split("=")[1];

	if (token) {
		config.headers["X-XSRF-TOKEN"] = decodeURIComponent(token);
	}

	const apiKey = import.meta.env.VITE_API_KEY;
	if (apiKey) {
		config.headers["X-API-KEY"] = apiKey;
	}

	return config;
});

export default instance;
