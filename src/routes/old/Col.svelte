<script>
    export let items;
    import Card from './Card.svelte';

    let columnHeights = [0, 0, 0]; // Track heights



</script>

<div class='subgrid'>
    {#each items as item}
    <Card title={item.title} description={item.description} image={item.image} imageAlt={item.imageAlt}/>
    {/each}
</div>


<style>
    .subgrid {
        row-gap: 5px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        border: 6px purple solid;
        height: fit-content;
    }

    /* @media (min-width: 500px) {
        .subgrid {
            grid-column: span 2;
        }
    } */
</style>
