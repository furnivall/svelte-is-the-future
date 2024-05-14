<script>
    import { fade } from 'svelte/transition';
    import { goto } from '$app/navigation';

    let title = "Headline Features of Svelte";
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
        Svelte has several key features that make it an attractive choice for modern web development:
        <ul>
            <li class="bullet"><span class="highlight">Compiler-based:</span> Enhances performance by reducing the client-side load.</li>
            <li class="bullet"><span class="highlight">Syntax:</span> Simple, concise, and elegant, making it easy to learn and read.</li>
            <li class="bullet"><span class="highlight">Reactivity:</span> Fine-grained and straightforward without boilerplate code.</li>
            <li class="bullet"><span class="highlight">Development Speed:</span> Allows for rapid application development.</li>
            <li class="bullet"><span class="highlight">Integration</span>: Seamlessly integrates with existing projects, supporting incremental adoption.</li>
            <li class="bullet"><span class="highlight">A11y by default</span>: Automatically generates accessible HTML and provides warnings during development for common accessibility issues.</li>
        </ul>
    </div>
    <div class="button-container">
    <button on:click={() => goto('/component-structure')}>Next Slide</button>
    <button on:click={() => goto('/history')}>Prev Slide</button>
    </div>
</div>
