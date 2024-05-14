<script>
    import { HighlightSvelte } from "svelte-highlight";
    import darcula from "svelte-highlight/styles/darcula";
    import { writable } from "svelte/store";
    import { goto } from "$app/navigation";

    let count = writable(0);

    function increment() {
        $count += 1;
    }
    function decrement() {
        $count -= 1;
    }

    let code =
`<!--  Super simplistic example, but this can get quite exciting. -->
\<script>
// writeable/readable/derived stores are all built-in.
let count = writable(0);   // We initialise our store here.
function increment() { $count += 1; }     // Update functions
function decrement() { $count -= 1; }
<\/script>

<button on:click={increment}>+</button>  <!-- Note the UI is reactive to changes -->
<button on:click={decrement}>-</button>
{$count}
`
</script>

<style>
    .header {
        color: #00FFFF;
        font-size: 28px;
        margin-bottom: 20px;
    }

    .content {
        font-size: 18px;
        line-height: 1.6;
    }

    button:hover {
        background-color: #00dddd; /* Slightly darker cyan on hover */
    }
</style>
<svelte:head>
    {@html darcula}
</svelte:head>

<div class="slide">
    <div class="header">State Management using Svelte 'Stores'</div>
    <div class="content">
        <HighlightSvelte {code} />


        <button on:click={increment}>+</button>
        <button on:click={decrement}>-</button>
        <span style="font-size: 24px; padding-left:20px;">{$count}</span>

    </div>
    <div class="button-container">
        <button on:click={() => goto('/transitions')}>Next Slide</button>
        <button on:click={() => goto('/component-structure')}>Prev Slide</button>
    </div>
</div>





