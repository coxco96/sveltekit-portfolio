<script>
    export let data;
    import { base } from "$app/paths";
    let title = data.title;
    let alt = data.alt;
    let description = data.description;
    let src = data.image;
    let aboveImageText = data.aboveImageText;
    let aboveImageText2 = data.aboveImageText2;
</script>

<span class="back">&#x2190; <a href="{base}/portfolio" aria-label='Go back to main portfolio page'>Back</a></span>
<main>
    <div class="text-column">
        <h1>{title}</h1>
        {#if aboveImageText}
            <div class="above-image-text">
                {@html aboveImageText}
            </div>
        {/if}
    </div>
    <div class="above-image-text">
        {#if aboveImageText2}
            {@html aboveImageText2}
        {/if}
    </div>
    <div class="text-column">
        <img src="../../../images/{src}" {alt} />

        <p>
            {@html description}
        </p>
    </div>
</main>

<style>
    .above-image-text {
        margin-bottom: 10px;
    }

    .back {
        text-transform: uppercase;
    }
</style>
