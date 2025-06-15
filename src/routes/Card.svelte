<script>
    import { goto } from "$app/navigation";
    import { base } from "$app/paths";

    /** Props **/
    const { title, src, alt, slug, externalUrl, cardHeight } = $props();

    // compute final href
    let href = $state(externalUrl ?? `${base}/${slug}`);

    // detect if the media is a video (mp4)
    let isVideo = src && src.toLowerCase().endsWith(".mp4");

    function handleClick() {
        if (externalUrl) {
            window.open(href, "_blank");
        } else {
            goto(href);
        }
    }

    function handleKeydown(event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            handleClick();
        }
    }
</script>

<div
    class="item-container hvr-glow"
    style="--card-height: {cardHeight}"
    role="link"
    tabindex="0"
    aria-label={title}
>
    <div class="item-title">
        {@html title}
    </div>

    {#if isVideo}
        <div class="media-container">
            <video class="media" controls>
                <source src="../../images/{src}" type="video/mp4" />
                <track
                    kind="captions"
                    label="No captions"
                    
                    srclang="en"
                    default
                />
                Your browser does not support the video tag.
            </video>
        </div>
    {:else if src}
        <div class="media-container">
            <img class="media" src="../../images/{src}" {alt} />
        </div>
    {/if}
</div>

<style>
    .item-container {
        cursor: pointer;
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

    .item-container:focus {
        outline: 2px solid #fff;
        outline-offset: 4px;
    }

    .item-title {
        font-size: 1.5rem;
        letter-spacing: 0.0125rem;
        font-weight: 600;
        margin-bottom: 12px;
        font-weight: 300;
        line-height: 1.4;
        margin: 0.25rem 0;
        color: rgba(240, 240, 240, 0.75);
    }

    .media-container {
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

    .media {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }

    /* hvr-glow adapted from @IanLunn on Github */
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
