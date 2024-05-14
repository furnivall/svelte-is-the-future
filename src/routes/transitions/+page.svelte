<script>
    import { fly } from 'svelte/transition';
    import { goto } from '$app/navigation';
    import { HighlightSvelte } from 'svelte-highlight';
    import darcula from "svelte-highlight/styles/darcula";
    let showFlag = false;
    let title = "Seamless Transitions";
    let code = `<div transition:fly={{ y: -50 }}>Whatever you want here</div>`;
</script>

<style>


    .content {
        font-size: 18px;
        line-height: 1.6;
    }

    button:hover {
        background-color: #00dddd; /* Slightly darker cyan on hover */
    }
    .flag-container { /* Container to size the SVG */
        width: 180px; /* Adjust width as needed */
        height: 120px; /* Adjust height as needed */
        margin: 20px auto;
    }
</style>

<svelte:head>
    {@html darcula}
</svelte:head>
<div class="slide">
    <div class="header">{title}</div>
    <div class="content">
        <ul>
            <li class="bullet">Svelte also provides built-in <span class="highlight">transitions</span>.</li>
            <li class="bullet">Some common transitions you can use: <span class="highlight">fade</span>, <span class="highlight">slide</span>, <span class="highlight">fly</span>, <span class="highlight">scale</span>, and more.</li>
        </ul>

        <HighlightSvelte {code} />
        <button on:click={() => showFlag = !showFlag}>transition!</button>

        {#if showFlag}
            <div class="flag-container" transition:fly={{ y: -50, duration: 500 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="120">
                    <rect width="100%" height="100%" fill="#005EB8" />
                    <path stroke="#fff" stroke-width="24" d="M0 0 200 120 M0 120 200 0" />
                </svg>
                <p><span class="highlight">Note:</span> These transitions also apply to entire pages!</p>

            </div>
        {/if}
    </div>
    <div class="button-container">
        <button on:click={() => goto('/actions')}>Next Slide</button>
        <button on:click={() => goto('/state-management')}>Prev Slide</button>
    </div>
</div>
