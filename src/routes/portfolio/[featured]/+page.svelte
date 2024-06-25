<script>
    export let data;
    import {page} from '$app/stores';
    import {base} from '$app/paths';
    console.log($page.params)
    let title = data.title;
    let alt = data.alt;
    let description = data.description;

    // let src = `images/${data.image}`


</script>

<span>&#x2190; <a href='{base}/portfolio'>Back</a></span>
<div class="text-column">
    <h1>{title}</h1>
    {#await import(`../../../lib/images/${data.image}`) then {default: src}}
    <img class='img' {src} {alt}/>
    {/await}
    <p>
        {description}
    </p>
</div>

<style>
        .img {
        height: var(--card-height);
        position: relative;
        max-width: 100%;
        min-width: 100%;
    }
</style>
