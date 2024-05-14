<script>
import {goto} from "$app/navigation";
</script>

<style>
    :global(body) {
        background-color: #000;
        color: #00ff66;
        font-family: 'Arial', sans-serif;
    }

    :global(.content) {
        font-size: 18px;
        line-height: 1.6;
    }
    :global(.slide) {
        padding: 40px;
        border: 2px solid #00ff66;
        border-radius: 10px;
        max-width: 800px; /* Optional: Keeps it from getting too wide */
        margin: auto;
        width: 80%; /* Or set a specific width in pixels, e.g., width: 600px; */
        height: 500px; /* Adjust the height as needed */
        display: flex;
        flex-direction: column; /* Stack children vertically */
        justify-content: space-between; /* Push content apart */
    }
    :global(.button-container) {
        display: flex;          /* Enable flexbox for easy centering */
        justify-content: space-between; /* Center items horizontally */
        width: 100%;            /* Optional: Ensure the container takes full width */
    }
    :global(button) {
            background-color: #00FFFF; /* Cyan background for the button */
            color: #000000; /* Black text for readability */
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            border-radius: 5px;
            margin-top: 20px;
        }
    :global(button:hover) {
            background-color: #00dddd; /* Slightly darker cyan on hover */
        }
    :global(.highlight) {
        color: #00FFFF; /* Bright cyan for highlighting */
        font-weight: bold;
    }
    :global(pre) {
        font-size: 14px;
    }
    :global(.header) {
        color: #00FFFF;
        font-size: 28px;
        margin-bottom: 10px;
    }

</style>

    <slot />



