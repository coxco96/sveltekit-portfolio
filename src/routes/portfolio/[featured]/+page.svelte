<script>
    export let data;
    import { base } from "$app/paths";

    let title = data.title;

    let alt = data.alt;
    let src = data.image;
    let imageCaption = data.imageCaption;
    let includeImage;
    // include the first image unless specifically set to false
    if (typeof data.includeImageOnFeaturePage !== 'undefined') {
        includeImage = data.includeImageOnFeaturePage;
    } else {
        includeImage = true;
    }


    // blocks for content, generally text, but
    // contentBlockThree is set up specifically for iframes
    // if contentBlockThree is used for text, it needs to be wrapped in <div class='text-column></div'
    let contentBlockOne = data.contentBlockOne;
    let contentBlockTwo = data.contentBlockTwo;
    let contentBlockThree = data.contentBlockThree;
    let contentBlockFour = data.contentBlockFour;

    // in case of additional images
    let imageTwo = data.imageTwo;
    let imageAltTwo = data.imageAltTwo;
    let imageCaptionTwo = data.imageCaptionTwo;
    let imageThree = data.imageThree;
    let imageAltThree = data.imageAltThree;
    let imageCaptionThree = data.imageCaptionThree;
</script>

<span class="back"
    >&#x2190; <a
        href="{base}/portfolio"
        aria-label="Go back to main portfolio page">Back</a
    ></span
>
<main>
    <div class="text-column">
        <h1 class="title">{@html title}</h1>
        {#if contentBlockOne}
            <div class="content-block-one content">
                {@html contentBlockOne}
            </div>
        {/if}
        {#if includeImage}
            <figure class="text-column figure">
                <img src="../../../images/{src}" {alt} />
                {#if imageCaption}
                    <figcaption>{@html imageCaption}</figcaption>
                {/if}
            </figure>
        {/if}

        {#if contentBlockTwo}
            <div class="content-block-two content">
                {@html contentBlockTwo}
            </div>
        {/if}

        {#if imageTwo}
        <figure class="text-column figure">
            <img src="../../../images/{imageTwo}" alt={imageAltTwo}/>
            {#if imageCaptionTwo}
                <figcaption>{@html imageCaptionTwo}</figcaption>
            {/if}
        </figure>
        {/if}
    </div>
    <div class="content-block-three content">
        {#if contentBlockThree}
            {@html contentBlockThree}
        {/if}
    </div>

    <div class='text-column'>

        {#if imageThree}
        <figure class="text-column figure">
            <img src="../../../images/{imageThree}" alt={imageAltThree}/>
            {#if imageCaptionThree}
                <figcaption>{@html imageCaptionThree}</figcaption>
            {/if}
        </figure>
        {/if}
    </div>

    <div class="content-block-four content text-column">
        {#if contentBlockFour}
            {@html contentBlockFour}
        {/if}
    </div>
</main>

<style>
    .title {
        font-size: 2.5rem;
        line-height: 2.875rem;
    }

    .back {
        text-transform: uppercase;
    }

    .content-block-one {
        font-size: 1.4375rem;
        line-height: 1.875rem;
        border-bottom: 1px solid #cecece;
        margin-bottom: 20px;
        padding-bottom: 20px;
    }
    

    .content-block-two,
    .content-block-three,
    .content-block-four {
        margin-bottom: 10px;
        font-size: 1.25rem;
        line-height: 1.875rem;
    }

    .figure {
        margin-bottom: 20px;
        padding-bottom: 20px;
        font-size: 16px;
        border-bottom: 1px solid #cecece;
        max-width: 100%;
    }

    figcaption {
        margin-top: 4px;
        font-size: 0.9375rem;
        line-height: 1.25rem;
        color: #727272;
        margin-right: 7px;
    }
</style>
