<script>
    export let title;
    export let description;
    export let image;
    export let imageAlt;

    let src;

    $: src = `../../src/lib/images/${image}`

</script>

<div class='card'>
    <div>
        {title}
    </div>
    <div>
        {description}
    </div>
    <picture>
        <img {src} alt={imageAlt}/>
    </picture>

</div>


<style>
    .card {
        width: 100%;
        height: fit-content;
        border: solid red 1px;
    }

    img {
        max-width: 100%;
    }
</style>