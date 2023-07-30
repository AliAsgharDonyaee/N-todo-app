import { toast } from "react-hot-toast";

export function errorHandler(message) {
	return toast.error(message, {
		icon: "💀",
		style: {
			borderRadius: "100px",
			color: "#fff",
			backgroundColor: "red",
		},
	});
}

export function successHandler() {
	return toast.success(`todo added`, {
		icon: "✅",
		style: {
			borderRadius: "100px",
			backgroundColor: "#fff",
			color: "green",
			border: "2px solid green",
		},
	});
}
