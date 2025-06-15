<script>
    import { base } from "$app/paths";
    /**
     * @typedef {Object} Props
     * @property {any} type
     * @property {any} publication
     * @property {string} [title]
     * @property {any} src
     * @property {any} alt
     * @property {any} slug
     * @property {any} subtitle
     * @property {any} cardHeight
     * @property {any} externalUrl
     */

    /** @type {Props} */
    let {
        type,
        publication,
        title = "title",
        src,
        alt,
        slug,
        subtitle,
        cardHeight,
        externalUrl,
    } = $props();

    let href = externalUrl ? externalUrl : `${base}/${slug}`;
    let target = externalUrl ? "_blank" : null;
</script>

<a {href} {target} class="a">
    <div class="item-container hvr-glow" style="--card-height: {cardHeight}">
        <!-- {#if type}
            <div class="type">{type}</div>
        {/if} -->
        <div class="item-title">
            {@html title}
        </div>

        {#if typeof src != "undefined"}
            <div class="img-container">
                <img class="img" src="../../images/{src}" {alt} />
            </div>
        {/if}

        <!-- <div class="publication">
            {#if publication}
                {@html publication}
            {/if}
        </div> -->
    </div>
</a>

<style>
    .a:hover {
        text-decoration: none;
    }
    .item-container {
        background: rgba(93, 113, 136, 0.1);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border-radius: 20px;
        border: 1px solid rgba(255, 255, 255, 0.075);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
        display: flex;
        flex-direction: column;
        height: var(--card-height);
        max-width: 400px;
        padding: 16px 16px 4px;
        position: relative;
        overflow: hidden;
        transition: transform 0.3s ease;
    }

    .item-container:hover {
        transform: translateY(-2px);
    }

    .item-title {
        font-size: 1.5rem;
        letter-spacing: 0.0125rem;
        font-weight: 600;
        margin-bottom: 12px;
        font-weight: 300;
        line-height: 1.4;
        margin: 0.25rem 0;
        color: rgba(220, 220, 220, 0.85);
    }
    /* 
    .subtitle {
        font-size: 1.15rem;
        line-height: 1.375rem;
        margin: 5px 0;
        color: #121212;
        letter-spacing: -0.0125rem;
    } */

    .publication,
    .type {
        font-size: 0.8rem;
        line-height: 1.25rem;
        text-transform: uppercase;
    }

    .publication {
        align-self: flex-end;
        min-height: 1.25rem;
        height: 1.25rem;
        min-width: 1px;
        margin-top: 5px;
        padding-right: 2.5px;
    }

    .type {
        margin-bottom: 2px;
    }

    .img-container {
        width: 100%;
        max-width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        flex-grow: 1;
        border-radius: 5px;
        margin-bottom: 12px;
    }

    .img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }

    /* hvr-glow adapted from @IanLunn on Github: https://github.com/IanLunn/Hover/blob/master/css/hover.css */

    .hvr-glow {
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-transition-duration: 0.15s;
        transition-duration: 0.15s;
        -webkit-transition-property: box-shadow;
        transition-property: box-shadow;
    }

    .hvr-glow:hover,
    .hvr-glow:focus,
    .hvr-glow:active {
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
    }

    .item-title,
    .subtitle,
    .publication,
    .type {
        color: rgba(228, 226, 226, 0.636);
        color: rgba(240, 240, 240, 0.75);

        /* text-shadow: 0 1px 2px rgba(23, 23, 23, 0.4); */
    }
</style>
