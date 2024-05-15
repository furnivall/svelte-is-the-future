<script>
	import { formData } from './store.js';

	let localPosition = '';
	let localExperience = 0;

	// Update the store whenever the local state changes
	$: formData.update(data => ({
		...data,
		jobInfo: { position: localPosition, experience: localExperience }
	}));

	// Events to signal moving between steps
	export let onNextStep;
	export let onPreviousStep;
</script>

<form on:submit|preventDefault={onNextStep}>
	<div>
	<label for="position">Position:</label>
	<input type="text" id="position" bind:value={localPosition} placeholder="Your position" />
	</div>
	<div>
	<label for="experience">Years of Experience:</label>
	<input type="number" id="experience" bind:value={localExperience} min="0" />
	</div>
	<button type="button" on:click={onPreviousStep}>Back</button>
	<button type="submit">Next</button>
</form>
