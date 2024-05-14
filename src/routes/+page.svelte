<script>
    import { fade } from 'svelte/transition';
    import { writable } from 'svelte/store';
    import { goto } from '$app/navigation';

    let title = "Introduction to Svelte";
    const currentPage = writable(0);  // Store to manage current page index

    // Function to navigate to the next page
    function nextPage() {
        currentPage.update(n => n + 1);
    }
</script>

<style>
    /* CSS styling for the slide with a green on black theme */
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
        font-size: 28px;
        margin-bottom: 20px;
        color: #00FFFF;
    }
    .content {
        font-size: 18px;
        line-height: 1.6;
    }
    .bullet {
        margin-left: 20px;
    }
    .highlight {
        color: #00FFFF; /* Bright cyan for highlighting */
        font-weight: bold;
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
        Svelte is a web framework (similar to NodeJS, React, Angular etc).<br>
        It has historically been <span class="highlight">extremely popular</span> with developers:
        <ul>
            <li class="bullet">StackOverflow - <span class="highlight">Most Loved framework</span> (2021/2022 developer surveys)</li>
            <li class="bullet">StackOverflow - <span class="highlight">Most Admired framework</span> (2023 developer survey)</li>
            <li class="bullet">State of JS 2020 awards - <span class="highlight">Most Satisfying for developers</span></li>
        </ul>
        This talk focuses on what it brings to the table for users of the HMCTS Node/Express stack.<br><br>
        <i><span class="highlight">Important Caveat:</span> I am not a Svelte expert.<br>
        I've played around with it a lot, but there are lots of things I don't know.</i>
    </div>
    <div class="button-container">
    <button on:click={() => goto('/history')}>Next Slide</button>
    </div>
</div>
