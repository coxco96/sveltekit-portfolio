<script>
    export let data;
    import {base} from '$app/paths';
    let title = data.title;
    let alt = data.alt;
    let description = data.description;
    let src = data.image;
</script>

<span>&#x2190; <a href='{base}/portfolio'>Back</a></span>
<div class="text-column">
    <h1>{title}</h1>
    <img class='card-background' src='../../../images/{src}' {alt}/>
    <p>
        {description}
    </p>
</div>

