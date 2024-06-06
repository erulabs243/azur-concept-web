import { customAlphabet } from "nanoid";

export const generateSlugId = customAlphabet(
	"1234567890qwertyuiopasdfghjklzxcvbnm",
	12,
);
