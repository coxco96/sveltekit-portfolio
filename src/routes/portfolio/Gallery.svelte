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
        // let tag = e.target.textContent;
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

<div role='group' aria-label='Filter items in portfolio'>
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

<div class="text-column">
    <h2>Featured</h2>
</div>

<div class="feature-grid">
    {#if filtered.length == 0}
        {#each items as item}
            <div class="item">
                <div class="text-column">
                    {#if item.featureLabel}
                        <h3>Featured: {item.featureLabel}</h3>
                    {/if}
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

<style>
    :root {
        --card-width: 300px;
        --card-height: 300px;
        --object-position: "left top";
        --card-bg-color: rgb(226, 226, 255);
    }

    .item h3 {
        margin-left: auto;
        margin-right: auto;
    }

    .item {
        margin-bottom: 25px;
    }

    .active-filter {
        background-color: rgb(164, 103, 112);
    }
</style>
