<script>
    import items from '../portfolio/items.json';

    let filtered = items.filter(item => item.isFeature == 1);

    let title = filtered[0].title;
    let image = filtered[0].image;
    let alt = filtered[0].alt;
    let description = filtered[0].description;

    $: src = `../../src/lib/images/${image}`

</script>

<div class="text-column">
    <h1>{title}</h1>
    <img {src} {alt}/>
    <p>
        {description}
    </p>
</div>
