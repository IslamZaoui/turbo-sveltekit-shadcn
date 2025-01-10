/**
 * @type {import('prettier').Options}
 */
export default {
	useTabs: true,
	tabWidth: 4,
	singleQuote: false,
	trailingComma: "none",
	semi: false,
	printWidth: 100,
	plugins: ["prettier-plugin-tailwindcss", "prettier-plugin-svelte"],
	overrides: [
		{
			files: "*.svelte",
			options: {
				parser: "svelte"
			}
		}
	]
}
