"use server";

import { createMessage } from "@/app/(app)/_api/messages";
import { redirect } from "@/navigation";
import { MessageSchema } from "@/schemas/message";

export default async function contactAction(_prevState: any, params: FormData) {
	const data = {
		name: params.get("name"),
		email: params.get("email"),
		phone: params.get("phone"),
		subject: params.get("subject"),
		message: params.get("message"),
	};

	const validation = MessageSchema.safeParse(data);

	if (validation.success) {
		// Create message
		const message = await createMessage({
			name: String(data.name),
			email: String(data?.email),
			phone: String(data.phone),
			subject: String(data.subject),
			message: String(data.message),
			messageType: "work",
		});

		// TODO add message type to form

		// Send email

		redirect("/");
	} else {
		return {
			data: {
				name: params.get("name"),
				email: params.get("email"),
				phone: params.get("phone"),
				subject: params.get("subject"),
				message: params.get("message"),
			},
			errors: validation.error.issues,
		};
	}
}
