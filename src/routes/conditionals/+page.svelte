<script>
	import { HighlightSvelte } from 'svelte-highlight';
	import darcula from 'svelte-highlight/styles/darcula';
	import { goto } from '$app/navigation';
	import { fly } from 'svelte/transition';
	let visibleElements = [];

	function showNextElement() {
		if (visibleElements.length < 3) {
			visibleElements = [...visibleElements, visibleElements.length];
		}
	}

	function hideNextElement() {
		if (visibleElements.length > 0) {
			visibleElements = visibleElements.slice(0, -1);
		}
	}

	const codeToHighlight = `\<script>
let visibleElements = [];
function showNextElement() {
	if (visibleElements.length < 3) {
	visibleElements = [...visibleElements, visibleElements.length];
}
  }
function hideNextElement() {
	if (visibleElements.length > 0) {
	visibleElements = visibleElements.slice(0, -1);
	}
}
<\/script>
<button on:click={showNextElement}>Show</button>
<button on:click={hideNextElement}>Hide</button>
{#if visibleElements.includes(0)}
 <p transition:fly={{ y: 200, duration: 500 }}>First element is now visible!</p>
{/if}
{#if visibleElements.includes(1)}
 <p transition:fly={{ y: 200, duration: 500 }}>Second element is now visible!</p>
{/if}
{#if visibleElements.includes(2)}
 <p transition:fly={{ y: 200, duration: 500 }}>Third element is now visible!</p>
{/if}
`;
</script>

<style>
    .content {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .codeContainer {
        width: 60%;
    }

</style>

<svelte:head>
	{@html darcula}
</svelte:head>

<div class="slide">
	<div class="header">Conditional Rendering with #if Blocks in Svelte</div>

		<div class="content">
			<div class="codeContainer">
				<HighlightSvelte code={codeToHighlight} style="font-size: 9px;" />
			</div>

			<div class="app">
				<button on:click={showNextElement}>Show</button>
				<button on:click={hideNextElement}>Hide</button>

				{#if visibleElements.includes(0)}
					<p transition:fly={{ y: 200, duration: 500 }}>First element is now visible!</p>
				{/if}
				{#if visibleElements.includes(1)}
					<p transition:fly={{ y: 200, duration: 500 }}>Second element is now visible!</p>
				{/if}
				{#if visibleElements.includes(2)}
					<p transition:fly={{ y: 200, duration: 500 }}>Third element is now visible!</p>
				{/if}
			</div>
		</div>

		<div class="button-container">
			<button on:click={() => goto('/forms')}>Next Slide</button>
			<button on:click={() => goto('/async')}>Prev Slide</button>
		</div>
</div>
