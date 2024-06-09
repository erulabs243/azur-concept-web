/** @type {import('eslint').Linter.Config} */
module.exports = {
	extends: ["next/core-web-vitals"],
	rules: {
		"react/no-unescaped-entities": "off",
	},
	parserOptions: {
		project: ["./tsconfig.json"],
		tsconfigRootDir: __dirname,
	},
};
