<script>
    import Card from "./Card.svelte";
    export let items;
    // create list of unique tags
    $: allTags = [...new Set(items.map((item) => item.tags).flat())];
    $: filters = [];
    $: filtered = items.filter((item) => {
        if (item.tags.some((x) => filters.includes(x))) {
            return true;
        } // returns true if filters list includes any of item's tags
    });

    let buttonClicked = false;

    function filterClick(tag) {
        // if filters array does not already include clicked tag, add it
        if (!filters.includes(tag)) {
            filters = [...filters, tag];
            // and set buttonClicked to true
            buttonClicked = true;
        } else {
            // if it is already included, remove it
            filters = filters.filter((x) => x != tag);
            // and set buttonClicked to false
            buttonClicked = false;
        }
    }
</script>

<h1>Portfolio</h1>

<div role="group" aria-label="Filter items in portfolio" class="filter-buttons">
    {#each allTags as tag}
        <button
            class="tag {filters.includes(tag) ? 'active-filter' : ''}"
            on:click={() => filterClick(tag)}
            aria-label="Filter by {tag}"
            aria-pressed={filters.includes(tag)}
        >
            {tag}
        </button>
    {/each}
</div>

<main>
    <div class="gallery">
        {#if filtered.length == 0}
            {#each items as item}
                <div class="item">
                    <a href="portfolio/{item.slug}">
                        <Card
                            title={item.title}
                            publication={item.publication}
                            type={item.type}
                            link={item.link}
                            src={item.image}
                        />
                    </a>
                </div>
            {/each}
        {:else}
            {#each filtered as item}
                <div class="item">
                    <div class="text-column">
                        <h3>{item.featureLabel}</h3>
                    </div>
                    <a href="portfolio/{item.slug}">
                        <Card
                            title={item.title}
                            publication={item.publication}
                            type={item.type}
                            link={item.link}
                            src={item.image}
                        />
                    </a>
                </div>
            {/each}
        {/if}
    </div>
</main>

<style>
    :root {
        --card-width: 300px;
        --card-height: 300px;
        --object-position: "left top";
        --card-bg-color: rgb(226, 226, 255);
    }

    .filter-buttons {
        display: flex;
        max-width: 100%;
        flex-direction: row;
        justify-content: center;
        margin: 0 auto;
        flex-wrap: wrap;
        gap: 5px 2px;
    }

    .gallery {
        margin-top: 2rem;
    }

    .item h3 {
        margin-left: auto;
        margin-right: auto;
    }

    .item {
        margin-bottom: 25px;
    }

    .tag {
        font-size: 16px;
        padding: 5px;
        background-color: lightgray;
        font-size: 18px;
    }

    .tag:hover {
        background-color: rgb(108, 108, 108);
        color: white;
    }

    .tag:active,
    .active-filter:active {
        background-color: rgb(79, 79, 79);
        color: white;
        transform: translateY(4px);
    }

    .active-filter {
        background-color: rgb(79, 79, 79);
        border-color: white;
        color: white;
    }

</style>
