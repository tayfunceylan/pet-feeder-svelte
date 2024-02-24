<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Avatar from '$lib/components/ui/avatar';

	let name = 'Hello World!';

	let i = 0;
	const increment = () => {
		i += 1;
	};
</script>

<h1>Welcome to SvelteKit</h1>
<h2>{name}</h2>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<Button on:click={increment}>Click me {i}</Button>
<Avatar.Root>
	<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
	<Avatar.Fallback>CN</Avatar.Fallback>
</Avatar.Root>
