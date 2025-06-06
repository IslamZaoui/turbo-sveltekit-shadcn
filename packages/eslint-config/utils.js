import antfu from "@antfu/eslint-config"
import prettier from "eslint-config-prettier"

/** @type {(config: import("@repo/eslint-config/types").AntfuConfig) => import("@repo/eslint-config/types").Antfu} */
export function createAntfu(config) {
	return antfu(config, prettier)
}

/** @type {import("@repo/eslint-config/types").AntfuConfig} */
export const baseConfig = {
	stylistic: false,
	rules: {
		"no-console": ["warn"],
		"antfu/no-top-level-await": ["off"],
		"node/no-process-env": ["error"],
		"perfectionist/sort-imports": [
			"error",
			{
				tsconfigRootDir: "."
			}
		],
		"unicorn/filename-case": [
			"error",
			{
				case: "kebabCase",
				ignore: ["README.md"]
			}
		]
	}
}
