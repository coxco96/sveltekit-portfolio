<script>
    // import {items} from '../portfolio/items.json';
    // export let item;
    // console.log(item);
    export let data;
    let title = data.title;
    let alt = data.alt;
    let description = data.description;
    let src = `../../../../src/lib/images/${data.image}`

</script>

<span>&#x2190; <a href='/portfolio'>Back</a></span>
<div class="text-column">
    <h1>{title}</h1>
    <img class='img' {src} {alt}/>
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
