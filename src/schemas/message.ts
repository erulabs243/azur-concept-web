import { z } from "zod";

export const MessageSchema = z.object({
	name: z.string().min(1),
	email: z.string().email().optional(),
	phone: z.string().min(1),
	subject: z.string().min(1),
	message: z.string().min(24),
});

export type MessageType = z.infer<typeof MessageSchema>;
