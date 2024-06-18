import type { MessageType } from "@/schemas/message";
import { cms } from "./api";

import type { Message } from "@/payload-types";
import type { LocaleParams } from "@/types";

export const createMessage = async ({
	name,
	phone,
	message,
	subject,
	email,
	messageType,
	lang = "fr",
}: {
	name: string;
	email?: string;
	phone: string;
	subject: string;
	message: string;
	messageType: Message["messageType"];
	lang?: LocaleParams;
}) =>
	await cms.create({
		collection: "messages",
		data: {
			name: name,
			email: email,
			phone: phone,
			subject: subject,
			message: message,
			messageType: messageType,
		},
		locale: lang,
	});
