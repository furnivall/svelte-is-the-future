<script>
	import { HighlightSvelte } from 'svelte-highlight';
	import darcula from 'svelte-highlight/styles/darcula';
	import { scale } from 'svelte/transition';
	import confetti from 'canvas-confetti';
	import { goto } from '$app/navigation';

	// Confetti Action
	function confettiAction(node) {
		function handleClick() {
			confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
		}

		node.addEventListener('click', handleClick);
		return {
			destroy() {
				node.removeEventListener('click', handleClick);
			}
		};
	}

	// Code to Display (escaped)
	const codeToHighlight = `\<script>  // Actions are reusable, separated from component code and have direct DOM access
import confetti from 'canvas-confetti';
function confettiAction(node) {
	function handleClick() {  // Can also be parameterised (e.g. particleCount)
		confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
	}
	node.addEventListener('click', handleClick); // Attached to the node (DOM element)
	return {
		destroy() { node.removeEventListener('click', handleClick); } // Clean up
	};
}
<\/script> <!-- confetti logic separate from main component code -->
<button use:confettiAction>Click for Confetti!</button> <!-- call with 'use' -->
`;
</script>

<svelte:head>
	{@html darcula}
</svelte:head>

<div class="slide" in:scale={{ duration: 5000, delay: 100 }}>
	<div class="header">Svelte Actions: Unleash DOM Magic</div>
	<div class="content">
		<button use:confettiAction>Click for Confetti!</button>
		<HighlightSvelte code={codeToHighlight} />
	</div>
	<div class="button-container">
		<button on:click={() => goto('/binds')}>Next Slide</button>
		<button on:click={() => goto('/transitions')}>Prev Slide</button>
	</div>
</div>
