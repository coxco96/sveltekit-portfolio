<script>
    export let type;
    export let publication;
    export let title = "title";
    export let src;
    export let alt = "";
    export let slug;
    export let subtitle;
    export let cardHeight;
    import { base } from "$app/paths";
</script>

<a href="{base}/{slug}" class="a">
    <div class="item-container hvr-glow" style='--card-height: {cardHeight}'>
        {#if type}
            <div class="type">{type}</div>
        {/if}
        <div class="item-title">
            {@html title}
        </div>

        <div class="subtitle">
            {#if subtitle}
                {@html subtitle}
            {/if}
        </div>

        {#if typeof src != 'undefined'}
        <div class="img-container">
            <img class="img" src="../../images/{src}" {alt} />
        </div>
        {/if}

        <div class="publication">
            {#if publication}
                {@html publication}
            {/if}
        </div>
    </div>
</a>

<style>
    .a:hover {
        text-decoration: none;
    }
    .item-container {
        background-color: #ebe6e0;
        display: flex;
        flex-direction: column;
        height: var(--card-height);
        max-width: 400px;
        padding: 5px 5px 0 8px;
        position: relative;
    }

    /* @media only screen and (max-width: 795px) {
        .item-container {
            height: var(--card-height);
        }
    } */

    .item-title {
        font-size: 1.7rem;
        font-family: Arial, Helvetica, sans-serif;
        color: #121212;
        line-height: 1.75rem;
        font-weight: 600;
    }

    .subtitle {
        font-size: 1.15rem;
        line-height: 1.375rem;
        margin: 5px 0;
        color: #343434;
        font-family: "Hind", Helvetica, Arial, sans-serif;
    }

    .publication,
    .type {
        font-size: 0.8rem;
        line-height: 1.25rem;
        color: #727272;
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
        color: #363333;
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
</style>
