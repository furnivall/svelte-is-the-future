<script>
    import { goto } from '$app/navigation';
</script>

<style>
    .slide {
        background-image: url('bg.webp');
        background-size: cover; /* adjusts the image to cover the entire div */
        background-position: center; /* centers the image */
        background-repeat: no-repeat; /* prevents the image from repeating */
        display: flex;
        justify-content: space-between; /* creates space between blurb and button */
        align-items: center; /* vertically centers the content */
        padding: 20px; /* adds padding to the slide */
        position: relative
    }

    .blurb-box {
        background-color: rgba(255, 255, 255, 0.8); /* white background with transparency */
        border: 2px solid #000000; /* black border */
        padding: 10px;
        border-radius: 10px;
        color: black;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* adds a shadow for better visibility */
        position: absolute;
        bottom: 20px; /* adjust as needed for spacing from bottom */
        right: 20px; /* adjust as needed for spacing from right */
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
        position: absolute;
        bottom: 20px; /* adjust as needed for spacing from bottom */
        left: 20px; /* adjus
    }

    button:hover {
        background-color: #00dddd; /* Slightly darker cyan on hover */
    }

    .button-container {
        text-align: center;
    }
</style>

<div class="slide">
    <div class="blurb-box">
        <p>Danny Furnivall (<a href="mailto://danny.furnivall@justice.gov.uk">danny.furnivall@justice.gov.uk</a>)</p>
        <p>Presented at the HMCTS Engineering Catchup on 16th May 2024</p>
        <p>Code available at <a href="https://github.com/furnivall/svelte-is-the-future">https://github.com/furnivall/svelte-is-the-future</a></p>

    </div>
    <div class="button-container">
        <button on:click={() => goto('/intro')}>Next Slide</button>
    </div>
</div>
