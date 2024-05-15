<script>
	import { formData } from './store.js';

	let localName = '';
	let localEmail = '';

	// Reactive update to central form data store
	$: formData.update(data => ({
		...data,
		personalInfo: { name: localName, email: localEmail }
	}));

	// Event to signal moving to the next form step
	export let onNextStep;
</script>

<form on:submit|preventDefault={onNextStep}>
	<div>
		<label for="name">Name:</label>
		<input id="name" type="text" bind:value={localName} placeholder="Your name" />
	</div>
	<div>
		<label for="email">Email:</label>
		<input id="email" type="email" bind:value={localEmail} placeholder="Your email" />
	</div>
	<button type="submit">Next</button>
</form>
