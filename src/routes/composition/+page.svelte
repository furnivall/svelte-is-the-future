<script>
	import { HighlightSvelte } from 'svelte-highlight';
	import darcula from 'svelte-highlight/styles/darcula';

	import Header from './Header.svelte';
	import Navigation from './Navigation.svelte';
	import Content from './Content.svelte';
	import { goto } from '$app/navigation';

	let visibleElements = [];

	function showNextElement() {
		if (visibleElements.length < 3) {
			visibleElements = [...visibleElements, visibleElements.length];
		}
	}
	const codeToHighlight = `<!-- Main file code -->
\<script>
  import Header from './Header.svelte';
  import Navigation from './Navigation.svelte';
  import Content from './Content.svelte';
<\/script>
<div class="app">
	<Header />
	<Navigation />
	<Content />
</div>
`;

const headerCode = `<!-- Header.svelte -->
<h2>My App</h2>
`;

const navigationCode = `<!-- Navigation.svelte -->
<ul>
	<li><a href="#">Home</a></li>
	<li><a href="#">About</a></li>
	<li><a href="#">Contact</a></li>
</ul>
`;

const contentCode = `<!-- Content.svelte -->
<p>Welcome to my Svelte app!</p>
`;
</script>

<style>
    .content {
        display: grid;
        grid-template-columns: 1fr 1fr;   /* Two equal-width columns */
        grid-template-rows: auto 1fr;  /* Top row auto, bottom row fills remaining */
        gap: 1rem;
        padding-top: 0;
        height: 40vh; /* Full viewport height */
    }

    .codeContainer {
        align-self: start;  /* Align to the top of its grid area */
    }

    .slide {
        position: relative;
    }

    .component-grid {
        display: grid;
        grid-template-rows: repeat(3, min-content);  /* Create rows for each code block with minimum content height */
        gap: 0.1rem;
        align-self: start; /* Align the content to the top */
    }

    .app {
        border: 1px solid green;
        height: 180px;
        width: 300px;
        padding-left: 20px;
        padding-right: 20px;
        font-size: 14px;
				background-color: white;
				color: black;
    }
</style>

<svelte:head>
	{@html darcula}
</svelte:head>

<div class="slide">
	<div class="header">Svelte Component Composition: Building Blocks of Your UI</div>
	{#if !visibleElements.includes(0)}
		We can easily build and reuse components via HTML element syntax. <br>This means we can call components from other files and include them within the page trivially.

	{/if}


	{#if visibleElements.includes(0)}
		{#if !visibleElements.includes(1)}
			<div>
				In this example, our main Svelte file imports and calls the Header, Navigation, and Content components. <br>This makes the main file concise and focused on composition rather than implementation details.</div>
		{/if}
	{/if}
	<div class="content">
		<div class="codeContainer">
			{#if visibleElements.includes(0)}
				<HighlightSvelte code={codeToHighlight} style="font-size: 10px;" />
			{/if}
		</div>

		<div class="app-container">
			{#if visibleElements.includes(2)}
				<div style="line-height: 1em;">As such, the main file's component composition results in the page rendering thus:</div>
			<br>
				<div class="app">
					<Header />
					<Navigation />
					<Content />
				</div>
			{:else}
				<div class="component-grid">
					{#if !visibleElements.includes(2)}
						{#if visibleElements.includes(1)}
									<div style="line-height: 1em;">The code within the three external files is shown below. In the real world, these could be much larger.</div>
							<div class="component-code">
								<HighlightSvelte code={headerCode} style="font-size: 10px;" />
							</div>
						{/if}
						{#if visibleElements.includes(1)}
							<div class="component-code">
								<HighlightSvelte code={contentCode} style="font-size: 10px;" />
							</div>
						{/if}
						{#if visibleElements.includes(1)}
							<div class="component-code">
								<HighlightSvelte code={navigationCode} style="font-size: 10px;" />
							</div>
						{/if}
					{/if}
				</div>
			{/if}
		</div>

	</div>
	{#if visibleElements.includes(2)}
<div>
	This approach can be particularly useful when combined with layout files in SvelteKit (which can define the appearance of all files within the same subdirectory).
	<br>This allows developers to create a parent template that applies to all files (similar to Nunjucks or other templating languages)
</div>
		{/if}
	<div class="button-container">
		<button on:click={() => goto('/composition')}>Next Slide</button>
		{#if !visibleElements.includes(2)}
			<center><button style="width: 100px;" on:click={showNextElement}>Show</button></center>
		{/if}
		<button on:click={() => goto('/binds')}>Prev Slide</button>
	</div>
</div>
