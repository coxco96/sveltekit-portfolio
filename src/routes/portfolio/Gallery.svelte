<script>
    import Card from "./Card.svelte";
    export let items;
    // create list of unique tags
    $: allTags = [...new Set(items.map((item) => item.tags).flat())];
    $: filters = [];
    $: filtered = items.filter((item) => {
        if (item.tags.some((x) => filters.includes(x))) {
            return true; // returns true if filters list includes any of item's tags
        }
    });

    function filterClick(tag) {
        // if filters array does not already include clicked tag, add it
        if (!filters.includes(tag)) {
            filters = [...filters, tag];
        } else {
            // if it is already included, remove it
            filters = filters.filter((x) => x != tag);
        }
    }

    // IF I decide to use background color shades over the gallery graphics, add this to the Card elements:
    // --card-bg-color={getBgColor(i)} (also add i back into the each blocks)
    function getBgColor(i) {
        let colors = [
            "rgba(230, 230, 250, 0.1)", // lavender
            "rgba(175, 238, 238, 0.1)", // pale aqua
            "rgba(176, 224, 230, 0.1)", // poweder blue
            "rgba(32, 178, 170, 0.1)", // green
        ];
        return colors[i % colors.length];
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
                            caitlinClark={item.caitlinClark}
                            --card-height={item.cardHeight ? item.cardHeight : '300px'}
                            
                        />
                    </a>
                </div>
            {/each}
        {:else}
            {#each filtered as item}
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
        {/if}
    </div>
</main>

<style>
    :root {
        --card-width: auto;
        --card-height: auto;
        --object-position: "left top";
        --card-bg-color: none;
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
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        position: absolute;
        left: 0;
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
