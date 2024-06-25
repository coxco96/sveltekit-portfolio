<script>
    export let type = "type";
    export let publication = "publication";
    export let title = "title";
    export let src;
    export let alt = "";
    // import { base } from "$app/paths";
    // export let link;
</script>

<div class="card hvr-glow text-column">
    <!-- <img class="card-background" {src} {alt} /> -->
    <img class='card-background' src='../../images/{src}' {alt}/>

    <div class="card-group">
        <div class="publication">
            <!-- {#if link}
                <a href={link} target="_blank">{publication}</a>
            {:else} -->
            {publication}
            <!-- {/if} -->
        </div>
        <div class="title">{@html title}</div>
    </div>

    <div class="type">{type}</div>
</div>

<style>
    .card {
        border: #cdcdcd 2px solid;
        height: var(--card-height);
        position: relative;
        background-color: var(--card-bg-color);
        max-width: 100%;
        min-width: 100%;
    }

    .card-group {
        position: absolute;
        bottom: 2px;
        left: 5px;
        height: fit-content;
        width: fit-content;
        max-width: 85%;
        background-color: rgba(255, 255, 255, 0.6);
        padding: 5px 2px;
        margin-bottom: 2.5px;
        border-radius: 10px;
    }

    .publication {
        font-style: italic;
        padding-bottom: 2.5px;
    }

    .title {
        font-size: 1.8rem;
        font-weight: 600;
        padding-right: 15%;
    }

    .type {
        position: absolute;
        top: 5px;
        left: 5px;
        text-transform: uppercase;
        font-weight: 600;
        background-color: rgba(255, 255, 255, 0.6);
        padding: 5px 2px;
    }

    .card-background {
        width: 100%;
        height: 100%;
        opacity: 0.3;
        object-fit: cover;
        text-align: center;
        object-position: var(--object-position);
    }

    /* hvr-glow adapted from @IanLunn on Github: https://github.com/IanLunn/Hover/blob/master/css/hover.css */

    .hvr-glow {
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: box-shadow;
        transition-property: box-shadow;
    }

    .hvr-glow:hover,
    .hvr-glow:focus,
    .hvr-glow:active {
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
    }
</style>
