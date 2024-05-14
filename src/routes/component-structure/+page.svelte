<script>
    import {HighlightSvelte} from "svelte-highlight";
    import darcula from "svelte-highlight/styles/darcula";
    import {goto} from "$app/navigation";

    let code = `\<script>
  const name = 'world';
<\/script>

\<style>                 <!-- you can still use global CSS if helpful -->
h1 {
color: purple;
}
<\/style>

\<div>
<p>Hello {name}!</p>    <!-- name is auto-populated from the script tags -->
<\/div>
`;
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
    <div class="header">Structure of a Svelte Component</div>
    <div class="content">
        Svelte components combine javascript, css, and html within a single file:
        <HighlightSvelte {code} />
    </div>
    <div class="button-container">
    <button on:click={() => goto('/state-management')}>Next Slide</button>
    <button on:click={() => goto('/headline-features')}>Prev Slide</button>
    </div>
</div>





