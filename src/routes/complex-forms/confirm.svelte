<script>
	import { formData } from './store.js';

	// Subscribe to the formData store to access the data for display
	let allData;
	$: allData = $formData;

	// Events to navigate back or to submit data
	export let onPreviousStep;
	export let onSubmit;

	// Function to handle form submission
	function handleSubmit() {
		onSubmit(allData); // Assuming onSubmit will handle the actual submission logic
	}
</script>

<h2>Confirm Your Information</h2>
<div>
	<h3>Personal Information</h3>
	<p>Name: {allData.personalInfo.name}</p>
	<p>Email: {allData.personalInfo.email}</p>
</div>
<div>
	<h3>Job Information</h3>
	<p>Position: {allData.jobInfo.position}</p>
	<p>Experience: {allData.jobInfo.experience} years</p>
</div>

<button on:click={onPreviousStep}>Back</button>
<button on:click={handleSubmit}>Confirm and Submit</button>
