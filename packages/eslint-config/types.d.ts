import type antfu from "@antfu/eslint-config"

export type AntfuConfig = Parameters<typeof antfu>[0]

export type Antfu = ReturnType<typeof antfu>
