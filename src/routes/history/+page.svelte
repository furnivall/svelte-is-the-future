<script>
    import { fade } from 'svelte/transition';
    import {goto} from "$app/navigation";

    let title = "History and Technology of Svelte";
</script>

<style>
    .slide {
        font-family: 'Arial', sans-serif;
        padding: 40px;
        color: #00ff66; /* Bright green text */
        background-color: #000; /* Black background */
        border: 2px solid #00ff66; /* Green border */
        border-radius: 10px;
        max-width: 800px;
        margin: auto;
    }
    .header {
        color: #00FFFF;
        font-size: 28px;
        margin-bottom: 20px;
    }

    .bullet {
        margin-left: 20px;
    }

    button {
        background-color: #00FFFF; /* Cyan background for the button */
        color: #000000; /* Black text for readability */
        border: none;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        border-radius: 5px;
        margin-top: 20px;
    }
    button:hover {
        background-color: #00dddd; /* Slightly darker cyan on hover */
    }
</style>

<div class="slide" in:fade={{ duration: 600 }}>
    <div class="header">{title}</div>
    <div class="content">
        <ul>
            <li class="bullet">Created in 2016 by <span class="highlight">Rich Harris</span>, a data journalist working for the Guardian and the New York Times (now at Vercel).</li>
            <li class="bullet">Harris had previously developed several tools, notably including <span class="highlight">Rollup</span> (a highly performant module bundler similar to Webpack).</li>
            <li class="bullet">He specifically wanted to improve the performance of web frameworks for the mobile era.</li>
            <li class="bullet">Svelte uses a <span class="highlight">compiler</span> to generate code (instead of a runtime).</li>
            <li class="bullet">In 2022, <span class="highlight">SvelteKit</span> was created, which allows us to build entire applications in Svelte with routing, server-side rendering and other features.</li>
        </ul>
    </div>
    <div class="button-container">
    <button on:click={() => goto('/headline-features')}>Next Slide</button>
    <button on:click={() => goto('/intro')}>Prev Slide</button>
        </div>
</div>
