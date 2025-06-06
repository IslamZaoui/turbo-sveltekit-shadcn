import { createAntfu, baseConfig } from "@repo/eslint-config/utils"

export default createAntfu({
	...baseConfig,
	svelte: true
})
