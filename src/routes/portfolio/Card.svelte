<script>
    export let type;
    export let publication;
    export let title = "title";
    export let src;
    export let alt = "";
    export let slug;
    export let subtitle;
    import { base } from "$app/paths";
    // import '@fontsource/hind'

    console.log(slug);
    console.log(title);
    // export let link;
</script>

<div class="item-container">
    <div class="item-title">
        <a href="{base}/portfolio/{slug}">{@html title}</a>
    </div>
    {#if subtitle}
        <div class="subtitle">
            {@html subtitle}
        </div>
    {/if}
    {#if type}
        <div class="type">{type}</div>
    {/if}

    <div class="img-container">
       <a href='{base}/portfolio/{slug}'><img class='img' src='../../images/{src}' {alt}/></a>
    </div>

    <div class="publication">
        {#if publication}
            {@html publication}
        {/if}
    </div>
</div>

<style>
    .item-container {
        border: 1px blue solid;
        display: flex;
        flex-direction: column;
        height: 350px;
        max-width: 100%;
        width: 350px;
    }

    .item-title a {
        font-size: 1.7rem;
        font-family: Arial, Helvetica, sans-serif;
        color: #121212;
        line-height: 1.75rem;
        font-weight: 600;
    }

    .subtitle {
        font-size: 1.15rem;
        line-height: 1.375rem;
        font-family: "Hind", Helvetica, Arial, sans-serif;
    }

    .publication,
    .type {
        font-size: 0.825rem;
        line-height: 1.25rem;
        color: #727272;
        text-transform: uppercase;
    }

    .publication {
        bottom: 0;
        align-self: end;
        min-height: 1.25rem;
        height: 1.25rem;
        min-width: 1px;
    }

    .type {
        color: #121212;
    }

    .img-container {
        border: purple 1px solid;
        width: 100%;
        max-width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    .img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }

    /* hvr-glow adapted from @IanLunn on Github: https://github.com/IanLunn/Hover/blob/master/css/hover.css */

    /* .hvr-glow {
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: box-shadow;
        transition-property: box-shadow;
    } */
    /* 
    .hvr-glow:hover,
    .hvr-glow:focus,
    .hvr-glow:active {
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
    } */
</style>
