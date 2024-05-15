<script>
	import { writable } from 'svelte/store';
	import { goto } from '$app/navigation';
	import { HighlightSvelte } from 'svelte-highlight';
	import darcula from 'svelte-highlight/styles/darcula';

	const firstCodeBlock = `\<script>
// Validation functions
function validateName() {
	nameError = name.length >= 3 ? '' : 'Name must be at least 3 characters long';
}
function validateEmail() {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	emailError = emailRegex.test(email) ? '' : 'Invalid email address';
}
function validatePassword() {
	passwordError = password.length >= 6 ? '' : 'Password must be at least 6 characters long';
}
function validateConfirmPassword() {
	confirmPasswordError = password === confirmPassword ? '' : 'Passwords do not match';
}
<\/script>`

const secondCodeBlock = `\<script>
// Form validity
let isFormValid = writable(false);

$: {
	validateName();
	validateEmail();
	validatePassword();
	validateConfirmPassword();
	isFormValid.set(!nameError && !emailError && !passwordError && !confirmPasswordError);
}
<\/script>`

const thirdCodeBlock = `\<form class="form" on:submit|preventDefault={handleSubmit}> <!-- handleSubmit is our event handler, implementation unimportant -->

<div class="formElement">
	<label for="name">Name:</label>
	<input id="name" type="text" bind:value={name} on:input={validateName} /> <!-- again, the bind does the heavy lifting -->
	{#if nameError}    <!-- show error if there is one -->
		<p class="error">{nameError}</p>
	{/if}
<\/div>

<!-- Additional form fields (which look much the same) removed for brevity -->

<button type="submit" disabled={$isFormValid === false}>Submit</button> <!-- conditionally prevents submit via validation -->
<\/form>`

	// Form fields
	let name = '';
	let email = '';
	let password = '';
	let confirmPassword = '';

	// Validation messages
	let nameError = '';
	let emailError = '';
	let passwordError = '';
	let confirmPasswordError = '';

	// Form validity
	let isFormValid = writable(false);

	// Validation functions
	function validateName() {
		nameError = name.length >= 3 ? '' : 'Name must be at least 3 characters long';
	}

	function validateEmail() {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		emailError = emailRegex.test(email) ? '' : 'Invalid email address';
	}

	function validatePassword() {
		passwordError = password.length >= 6 ? '' : 'Password must be at least 6 characters long';
	}

	function validateConfirmPassword() {
		confirmPasswordError = password === confirmPassword ? '' : 'Passwords do not match';
	}

	$: {
		validateName();
		validateEmail();
		validatePassword();
		validateConfirmPassword();
		isFormValid.set(!nameError && !emailError && !passwordError && !confirmPasswordError);
	}

	let visibleElements = [];

	function showNextElement() {
		if (visibleElements.length < 5) {
			visibleElements = [...visibleElements, visibleElements.length];
		}
	}

	function hideNextElement() {
		if (visibleElements.length > 0) {
			visibleElements = visibleElements.slice(0, -1);
		}
	}

	function handleSubmit() {
		alert('Form submitted successfully!');
	}

</script>

<style>
	.error {
	color: red;
}
	.form {
			background-color: white;
			font-size: 10px;
			color: black;
			text-align: center;
			width: 60%;
			border-radius: 10px;
			padding: 10px;
	}

</style>

<svelte:head>
	{@html darcula}
</svelte:head>

<div class="slide">
	<div class="header">Using Forms with Svelte</div>
	<div class="content">
	{#if !visibleElements.includes(0)}
		<p><span class="highlight">Forms</span> are another area where Svelte shines.</p>
		<p>As mentioned earlier, <span class="highlight">variable binding</span> can be a highly useful way to perform validation.</p>
		<p></p>
		{/if}

		{#if !visibleElements.includes(1)}
		{#if visibleElements.includes(0)}
			<p>In this example, we're going to look at combining the following in our validation of a standard form:</p>
			<ul>
				<li class="highlight">Variable binding</li>
				<li class="highlight">Reactivity syntax</li>
				<li class="highlight">Dynamic error messages</li>
				<li class="highlight">Altering element properties conditionally</li>
			</ul>
			{/if}{/if}

		{#if !visibleElements.includes(2)}
			{#if visibleElements.includes(1)}
				<p>Given a few simple validation functions specifically looking at name, email and password fields: </p>

					<HighlightSvelte code={firstCodeBlock} style="font-size: 10px;" />

			{/if}{/if}

		{#if !visibleElements.includes(3)}
			{#if visibleElements.includes(2)}
				<p>We can utilise Svelte's reactive syntax to check our form's validity in real time.</p>
				<p>The <span class="highlight">$:</span> syntax is used to define a reactive statement, meaning the code block will re-run whenever any reactive variables or stores within it change.</p>

				<HighlightSvelte code={secondCodeBlock} style="font-size: 10px;" />

			{/if}{/if}

		{#if !visibleElements.includes(4)}
			{#if visibleElements.includes(3)}
				<p>Here, we define our form's appearance and behaviour.</p>
				<p>Note the behaviour of the form elements and submit button in particular, and how they interact with the validation functions.</p>

				<HighlightSvelte code={thirdCodeBlock} style="font-size: 10px;" />
			{/if}{/if}


		{#if visibleElements.includes(4)}
			<p>Our final form:</p>
<form class="form" on:submit|preventDefault={handleSubmit}>
	<div>   <label for="name">Name:</label>
		<input id="name" type="text" bind:value={name} on:input={validateName} />
		{#if nameError}
			<p class="error">{nameError}</p>
		{/if}
	</div>

	<div>   <label for="email">Email:</label>
		<input id="email" type="email" bind:value={email} on:input={validateEmail} />
		{#if emailError}
			<p class="error">{emailError}</p>
		{/if}
	</div>

	<div>   <label for="password">Password:</label>
		<input id="password" type="password" bind:value={password} on:input={validatePassword} />
		{#if passwordError}
			<p class="error">{passwordError}</p>
		{/if}
	</div>

	<div>   <label for="confirmPassword">Confirm Password:</label>
		<input id="confirmPassword" type="password" bind:value={confirmPassword} on:input={validateConfirmPassword} />
		{#if confirmPasswordError}
			<p class="error">{confirmPasswordError}</p>
		{/if}
	</div>

	<button type="submit" disabled={$isFormValid === false}>Submit</button>
</form>
		{/if}
	<div class="button-container">
		<button on:click={() => goto('/complex-forms')}>Next Slide</button>
		<button on:click={showNextElement}>Show</button>
		<button on:click={hideNextElement}>Hide</button>
		<button on:click={() => goto('/conditionals')}>Prev Slide</button>
	</div>
		</div>
</div>
