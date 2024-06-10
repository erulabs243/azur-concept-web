/** @type {import('eslint').Linter.Config} */
module.exports = {
	extends: ["next/core-web-vitals"],
	rules: {
		"react/no-unescaped-entities": "off",
		"no-restricted-imports": [
			"error",
			{
				name: "next/link",
				message: "Please import from `@/navigation` instead.",
			},
			{
				name: "next/navigation",
				importNames: [
					"redirect",
					"permanentRedirect",
					"useRouter",
					"usePathname",
				],
				message: "Please import from `@/navigation` instead.",
			},
		],
	},
	parserOptions: {
		project: ["./tsconfig.json"],
		tsconfigRootDir: __dirname,
	},
};
