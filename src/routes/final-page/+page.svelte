<script>
	import { fade } from 'svelte/transition';
	import { goto } from '$app/navigation';

	let title = "Conclusion / Q&A";
</script>

<style>

    .header {
        color: #00FFFF;
        font-size: 28px;
        margin-bottom: 20px;
    }

    .bullet {
        margin-left: 20px;
    }


</style>

<div class="slide" in:fade={{ duration: 600 }}>
	<div class="header">{title}</div>
	<div class="content">
		<p>That's about all I've got so far.</p>
		<p>I've really enjoyed playing with Svelte (you can probably tell).</p>
		<p>I have barely scratched the surface of the features of Svelte - there's a lot more to see.</p>
		<p>There's an excellent tutorial available at <a href="learn.svelte.dev">learn.svelte.dev</a> which is what I used to learn.</p>
		<p>While writing this, I've attempted to compare my examples with React & Angular equivalents - generally speaking, Svelte brings much less complexity, less code and probably performs faster.</p>
		<ul>
			<li class="bullet">Code available at <a href="https://github.com/furnivall/svelte-is-the-future">github.com/furnivall/svelte-is-the-future</a> </li>
			<li class="bullet">Any questions?</li>
			<li class="bullet">Grab me on Slack: <span class="highlight">@danny</span></li>
		</ul>
	</div>
	<div class="button-container">
		<button on:click={() => goto('/complex-forms')}>Prev Slide</button>
	</div>
</div>
