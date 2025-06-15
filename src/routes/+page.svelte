<script>
    import Gallery from "./Gallery.svelte";
    import Hero from './Hero.svelte';
    let { data } = $props();
    let items = data.items;
    
</script>

<svelte:head>
    <title>Mapcourt Portfolio</title>
    <meta name="description" content="Courtney Cox's Portfolio" />
</svelte:head>


<Hero/>




<Gallery {items} />

<style>
    :root {
        --card-height: 400px;
    }

</style>
