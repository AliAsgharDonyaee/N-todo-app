import { object, string } from "yup";

export const Validation = object({
	title: string().min(3, "😑 Too Short!").max(25, "Too Long!").required("💀 Brah-pleaseeee enter text"),
	description: string().min(3, "😑 Too Short!").required("💀 Brah-pleaseeee enter text"),
});
