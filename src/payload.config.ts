// storage-adapter-import-placeholder
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload/config";
import { fileURLToPath } from "url";
import sharp from "sharp";

import {
	Users,
	Media,
	Services,
	ServiceCategories,
	Posts,
	PostCategories,
	Customers,
	Profile,
	Projects,
	Reviews,
	Faq,
	Messages,
} from "./collections";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
	admin: {
		user: Users.slug,
	},
	collections: [
		Users,
		Media,
		Services,
		ServiceCategories,
		Posts,
		PostCategories,
		Profile,
		Customers,
		Projects,
		Reviews,
		Faq,
		Messages,
	],
	editor: lexicalEditor(),
	secret: process.env.PAYLOAD_SECRET || "",
	typescript: {
		outputFile: path.resolve(dirname, "payload-types.ts"),
	},
	db: postgresAdapter({
		idType: "uuid",
		pool: {
			connectionString: process.env.DATABASE_URI || "",
		},
	}),
	sharp,
	plugins: [
		// storage-adapter-placeholder
	],

	/**
	 * Internationalization
	 */
	i18n: {
		fallbackLanguage: "en",
	},

	/**
	 * Localization
	 */
	localization: {
		locales: [
			{
				label: {
					en: "English",
					fr: "Anglais",
				},
				code: "en",
			},
			{
				label: {
					en: "French",
					fr: "Français",
				},
				code: "fr",
			},
		],
		defaultLocale: "fr",
		fallback: true,
	},

	/**
	 * Uploads
	 */
	upload: {
		staticUrl: "/media",
		staticDir: "media",
	},
});
