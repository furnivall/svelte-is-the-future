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
            <li class="bullet"><span class="highlight">Compiler-based - No Virtual DOM:</span> Enhances performance by reducing the client-side load.
            Unlike React, Angular and others, it does not require a runtime for diffing and patching while it runs, while also using much less code (i.e. better perf)</li>
            <li class="bullet"><span class="highlight">Syntax:</span> Simple, concise, flexible and elegant, making it super easy to learn and read.<br> Think Python for web dev.</li>
            <li class="bullet"><span class="highlight">Reactivity:</span> Fine-grained and straightforward without boilerplate code or external dependencies.</li>
            <li class="bullet"><span class="highlight">Development Speed:</span> Allows for rapid application development (hence this presentation).</li>
            <li class="bullet"><span class="highlight">Integration</span>: Seamlessly integrates with existing projects (via npm), supporting incremental adoption.</li>
            <li class="bullet"><span class="highlight">A11y by default</span>: Automatically generates accessible HTML and provides compiler warnings during development for common accessibility issues.</li>
        </ul>
    </div>
    <div class="button-container">
    <button on:click={() => goto('/component-structure')}>Next Slide</button>
    <button on:click={() => goto('/history')}>Prev Slide</button>
    </div>
</div>
