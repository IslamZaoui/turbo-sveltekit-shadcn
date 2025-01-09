import type { Config } from "tailwindcss"
import preset from "@repo/ui/tailwind.config.ts"

export default {
	content: ["./src/**/*.{html,js,svelte,ts}", "../../packages/ui/src/**/*.{html,js,svelte,ts}"],

	presets: [preset],

	theme: {
		extend: {}
	},

	plugins: []
} satisfies Config
