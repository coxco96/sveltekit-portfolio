<script>
    export let data;
    import { base } from "$app/paths";
    let title = data.title;
    let alt = data.alt;
    let description = data.description;
    let src = data.image;
    let aboveImageText = data.aboveImageText;

</script>

<span class="back">&#x2190; <a href="{base}/portfolio">Back</a></span>
<main>
    <div class="text-column">
        <h1>{title}</h1>
        <div class="above-image-text">
            {#if aboveImageText}
                {@html aboveImageText}
            {/if}
        </div>

            <img
                src="../../../images/{src}"
                {alt}
            />

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
