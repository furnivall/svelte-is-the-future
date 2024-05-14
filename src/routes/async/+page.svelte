<script>
	import { HighlightSvelte } from 'svelte-highlight';
	import darcula from 'svelte-highlight/styles/darcula';
	import { goto } from '$app/navigation';

	let apiKey = import.meta.env.VITE_OPENAI_API_KEY; // Accessing the API key from environment variables
	let query = '';
	let responsePromise = null;
	let isApiKeyToggled = false;

	async function fetchResponse(query) {
		const response = await fetch('https://api.openai.com/v1/chat/completions', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${apiKey}`
			},
			body: JSON.stringify({
				model: 'gpt-3.5-turbo-0125',
				messages: [
					{
						role: 'system',
						content: 'You are a helpful assistant.'
					},
					{
						role: 'user',
						content: query
					}
				]
			})
		});
		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(errorData.error.message || 'Failed to fetch response');
		}
		const data = await response.json();
		return data.choices[0].message.content.trim();
	}

	function handleFetchResponse() {
		responsePromise = fetchResponse(query);
	}

	function toggleApiKey() {
		isApiKeyToggled = !isApiKeyToggled;
		apiKey = isApiKeyToggled ? '' : import.meta.env.VITE_OPENAI_API_KEY;
	}

	let visibleElements = [];

	function showNextElement() {
		if (visibleElements.length < 3) {
			visibleElements = [...visibleElements, visibleElements.length];
		}
	}

	const codeToHighlight = `<script>
// boilerplate for sending requests to openAI hidden for brevity
  function handleFetchResponse() {
    responsePromise = fetchResponse(query);
  }
<\/script>
<input type="text" bind:value={query}>
<button on:click={handleFetchResponse}>Fetch Response</button>

{#await responsePromise}
  <p>Loading response...</p>
{:then response}
  <p>{response}</p>
{:catch error}
  <p>Error: {error.message}</p>
{/await}
`;
</script>

<style>
    .content {
        display: grid;
        grid-template-columns: 1fr 1fr; /* Two equal-width columns */
        grid-template-rows: auto 1fr; /* Top row auto, bottom row fills remaining */
        gap: 1rem;
        padding-top: 0;
        height: 40vh;
    }

    .codeContainer {
        align-self: start; /* Align to the top of its grid area */
    }

    .slide {
        position: relative;
    }

    .component-grid {
        display: grid;
        grid-template-rows: repeat(3, min-content); /* Create rows for each code block with minimum content height */
        gap: 0.1rem;
        align-self: start; /* Align the content to the top */
    }

    .app {
        border: 1px solid green;
        height: auto;
        width: 90%;
        padding: 20px;
        font-size: 14px;
        overflow: auto;
    }

    .app input[type="text"] {
        width: 100%;
        box-sizing: border-box;
        padding: 5px;
        margin-bottom: 10px;
        font-size: 14px;
        resize: vertical; /* Allow vertical resizing */
    }

    .message {
        font-size: 1rem;
        margin-top: 1rem;
    }

    .button-container {
        display: flex;
        justify-content: space-between;
    }
</style>

<svelte:head>
	{@html darcula}
</svelte:head>

<div class="slide">
	<div class="header">Using #await Blocks in Svelte</div>
	{#if !visibleElements.includes(0)}
		Svelte's #await blocks make it simple to handle asynchronous operations in your components. They provide a clean way
		to manage loading, success, and error states.
	{/if}

	{#if visibleElements.includes(0)}
		{#if !visibleElements.includes(1)}
			<div>
				In this example, we fetch a response from the OpenAI API. We use an <code>#await</code> block to handle the
				promise returned by our <code>fetchResponse</code> function.
			</div>
		{/if}
	{/if}
	<div class="content">
		<div class="codeContainer">
			{#if visibleElements.includes(0)}
				<HighlightSvelte code={codeToHighlight} style="font-size: 10px;" />
			{/if}
		</div>

		{#if visibleElements.includes(2)}
			<div>
				This approach is particularly useful for handling asynchronous data fetching and provides a seamless user
				experience by showing loading and error states naturally.
			</div>
		{/if}
		<div class="app-container">
			{#if visibleElements.includes(1)}
				{#if !visibleElements.includes(2)}
					<div style="line-height: 1em;">Here is how it looks in action:</div>
					<br>
					<div class="app">
						<input type="text" bind:value={query} placeholder="Type your query here...">
						<div class="button-container">
							<button on:click={handleFetchResponse}>Fetch Response</button>
							<button on:click={toggleApiKey}>
								{isApiKeyToggled ? 'Reset API Key' : 'Toggle API Key'}
							</button>
						</div>
						{#if responsePromise != null}
							{#await responsePromise}
								<p class="message">Loading response...</p>
							{:then response}
								<p class="message">{response}</p>
							{:catch error}
								<p class="message">Error: {error.message}</p>
							{/await}
						{/if}
					</div>
				{:else}
					<div class="component-grid">

					</div>
				{/if}
			{/if}
		</div>
	</div>

	<div class="button-container">
		<button on:click={() => goto('/conditionals')}>Next Slide</button>
		{#if !visibleElements.includes(2)}
			<center>
				<button style="width: 100px;" on:click={showNextElement}>Show</button>
			</center>
		{/if}
		<button on:click={() => goto('/binds')}>Prev Slide</button>
	</div>
</div>
