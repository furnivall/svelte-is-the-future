<script>
	import { writable } from 'svelte/store';
	import { goto } from '$app/navigation';
	import { HighlightSvelte } from 'svelte-highlight';
	import darcula from 'svelte-highlight/styles/darcula';
	import PersonalInfo from './personalInfo.svelte';
	import JobInfo from './jobInfo.svelte';
	import Confirm from './confirm.svelte';
	import { formData } from './store.js';
	let visibleElements = [];

	let step = 1;

	// Function to navigate to the next form step
	function nextStep() {
		step++;
	}

	// Function to navigate to the previous form step
	function previousStep() {
		step--;
	}

	// Function to handle final form submission
	function handleSubmit(data) {
		alert('data submitted');
		// Additional submission logic here, like an API call
		// This could be posting the data to a server or processing it in another way.
	}

	function showNextElement() {
		if (visibleElements.length < 6) {
			visibleElements = [...visibleElements, visibleElements.length];
		}
	}

	function hideNextElement() {
		if (visibleElements.length > 0) {
			visibleElements = visibleElements.slice(0, -1);
		}
	}

	const firstCodeBlock = `// store.js
import { writable } from 'svelte/store';
const formData = writable({
personalInfo: {
	name: '',
	email: ''
},
jobInfo: {
	position: '',
	experience: 0
},
confirmSubmission: false
});`

	const secondCodeBlock = `\<script>
// imports and initialisation of vars omitted
$: formData.update(data => ({ // Reactive update to central form data store
...data,
personalInfo: { name: localName, email: localEmail }
}));
export let onNextStep;   // Event to signal moving to the next form step
<\/script>
<form on:submit|preventDefault={onNextStep}> <!-- trigger on submit -->
<div>
	<label for="name">Name:</label>
	<input id="name" type="text" bind:value={localName} placeholder="Your name" />
</div>
<!-- same as above but for email -->
<button type="submit">Next</button>
</form>`

	const thirdCodeBlock = `\<script>
  // Update the store whenever the local state changes as before
  $: formData.update(data => ({
    ...data,
    jobInfo: { position: localPosition, experience: localExperience }
  }));
  // Events to signal moving between steps
  export let onNextStep;
  export let onPreviousStep;
<\/script>
<form on:submit|preventDefault={onNextStep}>
  <label for="position">Position:</label>
  <input type="text" id="position" bind:value={localPosition} placeholder="Your position" />
  <!-- same as above for other fields -->
  <button type="button" on:click={onPreviousStep}>Back</button>
  <button type="submit">Next</button>
</form>`

	const fourthCodeBlock = `\<script>
  import { formData } from './store.js';
  let allData;  // Subscribe to the formData store to access the data for display
  $: allData = $formData;  // reactive syntax strikes again
  export let onPreviousStep;  // Events to navigate back or to submit data
  export let onSubmit;

  function handleSubmit() {
    onSubmit(allData); // Call the onSubmit function passed from the parent
    }
<\/script>
<div>
  <h3>Confirm Your Information</h3>
  <p>Name: {allData.personalInfo.name}</p>
  <p>Email: {allData.personalInfo.email}</p>
  <!-- same for jobInfo -->
</div>
<button on:click={onPreviousStep}>Back</button>
<button on:click={handleSubmit}>Confirm and Submit</button>`

	const fifthCodeBlock = `\<script>
 // imports and initialisations omitted
  // Functions for navigating back and forth
  function nextStep() {
    step++; // validation could be applied here (step is an int)
  }
  function previousStep() {
    step--;
  }
  function handleSubmit(data) { // Function to handle final form submission
    alert('Data submitted');  // Additional submission logic would be here, e.g. an API call
  }
<\/script>
{#if step === 1}  <!-- Conditional rendering of form steps -->
	<PersonalInfo onNextStep={nextStep} />
{:else if step === 2}
	<JobInfo onNextStep={nextStep} onPreviousStep={previousStep} />
{:else if step === 3}
	<Confirm onPreviousStep={previousStep} onSubmit={handleSubmit} />
{/if}
`

</script>

<svelte:head>
	{@html darcula}
</svelte:head>

<style>
	.form-container {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 14px;
			border: 1px solid green;
			padding: 10px;
			border-radius: 10px;
  }
	h3 {

	}
</style>

<div class="slide">
	<div class="header">More Complex Forms and State Management</div>
	<div class="content">

		{#if visibleElements.includes(5)}
			{#if !visibleElements.includes(6)}

		<div class="form-container">

		<!-- Conditional rendering of form steps -->
		{#if step === 1}
			Here's the final form:
			<PersonalInfo onNextStep={nextStep} />
		{:else if step === 2}
			<JobInfo onNextStep={nextStep} onPreviousStep={previousStep} />
		{:else if step === 3}
			<Confirm onPreviousStep={previousStep} onSubmit={handleSubmit} />
		{/if}
	</div>
				{/if}
			{/if}


		{#if visibleElements.includes(0)}
			{#if !visibleElements.includes(1)}
				<p>Let's say we want to build a multi-page form where each step of the form updates a shared state object.</p>
				<p>We start by creating the following formData object, within <span class="highlight">store.js</span>.</p>
				<HighlightSvelte code={firstCodeBlock} style="font-size: 10px; width: 50%;" />
			{/if}
			{/if}

		{#if visibleElements.includes(1)}
			{#if !visibleElements.includes(2)}
				<p>We can then start creating the form pages. Here's <span class="highlight">personalInfo.svelte</span>:</p>
				<HighlightSvelte code={secondCodeBlock} style="font-size: 10px; width: 100%;" />
			{/if}
		{/if}
		{#if visibleElements.includes(2)}
			{#if !visibleElements.includes(3)}
				<p>And here's <span class="highlight">jobInfo.svelte</span>:</p>
				<HighlightSvelte code={thirdCodeBlock} style="font-size: 10px; width: 100%;" />
			{/if}
		{/if}
		{#if visibleElements.includes(3)}
			{#if !visibleElements.includes(4)}
				<p><span class="highlight">Confirm.svelte</span> is slightly different:</p>
				<HighlightSvelte code={fourthCodeBlock} style="font-size: 10px; width: 100%;" />
			{/if}
		{/if}
		{#if visibleElements.includes(4)}
			{#if !visibleElements.includes(5)}
				<p>Our parent component is shown here:</p>
				<HighlightSvelte code={fifthCodeBlock} style="font-size: 10px; width: 100%;" />
			{/if}
		{/if}

	</div>
	<div class="button-container">
		<button on:click={() => goto('/final-page')}>Next Slide</button>
		<button on:click={showNextElement}>Show</button>
		<button on:click={hideNextElement}>Hide</button>
		<button on:click={() => goto('/forms')}>Prev Slide</button>
	</div>
</div>
