<script>
	import { HighlightSvelte } from 'svelte-highlight';
	import darcula from 'svelte-highlight/styles/darcula';
	import { fly } from 'svelte/transition';
	import { goto } from '$app/navigation';
	let showFlag = false;
	let name = "World"; // Initial value

	const codeToHighlight = `\<script>
  let name = "World"; // Initial value
<\/script>
<input type="text" bind:value={name}> <!-- the bind keyword does the heavy lifting here -->
<p>Hello, {name}!</p>
`;
</script>

<style>
    .flag-container {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%); /* Center the flag */
        z-index: 100; /* Ensure it's on top */
    }
    .emoji-container {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%); /* Center the emoji */
        z-index: 100; /* Ensure it's on top */
        font-size: 10rem; /* Adjust the emoji size as needed */
    }
</style>

<svelte:head>
	{@html darcula}
</svelte:head>

<div class="slide" in:fly={{ y:-600, duration: 2000, delay: 100 }}>
	<div class="header">Svelte's Two-Way Binding: Effortless Data Synchronisation</div>
	<div class="content">
		Svelte allows us to easily bind a value to another. This has lots of potential use cases, including forms, updating interactive dashboards, user collaborations etc<br>
		<input type="text" bind:value={name}>
		<p class="highlight">Hello, {name}!</p>


		<HighlightSvelte code={codeToHighlight} />

		{#if name == 'Scotland'}
			<div class="flag-container" transition:fly={{ y: -50, duration: 500 }}>
				<svg xmlns="http://www.w3.org/2000/svg" width="200" height="120">
					<rect width="100%" height="100%" fill="#005EB8" />
					<path stroke="#fff" stroke-width="24" d="M0 0 200 120 M0 120 200 0" />
				</svg>
			</div>
		{/if}

		{#if name == 'England'}
			<div class="emoji-container">
				👎
			</div>
		{/if}
	<span class="highlight">Note:</span> We can also add interactive responses to particular inputs using bindings (e.g. for validation).
		<span class="highlight">Bonus:</span> try using 'Scotland' or 'England'
	</div>
	<div class="button-container">
		<button on:click={() => goto('/composition')}>Next Slide</button>
		<button on:click={() => goto('/actions')}>Prev Slide</button>
	</div>
</div>
