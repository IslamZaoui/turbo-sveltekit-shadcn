<script lang="ts">
	import { Button } from "@repo/ui"

	let count = $state(0)
</script>

<main class="flex items-center justify-center h-screen">
	<Button onclick={() => count++}>You clicked me {count} times</Button>
</main>
