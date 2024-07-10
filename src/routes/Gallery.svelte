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

    // make cards 400px unless otherwise specified
    function cardHeight(h) {
       return h !== "undefined" ? h : "400px";
    }
</script>


<section>
    <!-- <div class='text-column'><h2 class='h2'>Portfolio of Courtney Cox</h2></div> -->
    <p class="filter-label">Filter by:</p>
    <div
        role="group"
        aria-label="Filter items in portfolio"
        class="filter-buttons"
    >
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
                {#each items as item, i}
                    <div class="item">
                        <Card
                            title={item.title}
                            publication={item.publication}
                            type={item.type}
                            link={item.link}
                            src={item.image}
                            slug={item.slug}
                            subtitle={item.subtitle}
                            cardHeight={cardHeight(item.cardHeight)}
                            alt={item.imageAlt}
                        />
                    </div>
                {/each}
            {:else}
                {#each filtered as item}
                    <div class="item">
                        <Card
                            title={item.title}
                            publication={item.publication}
                            type={item.type}
                            link={item.link}
                            src={item.image}
                            slug={item.slug}
                            subtitle={item.subtitle}
                            cardHeight={cardHeight(item.cardHeight)}
                            alt={item.imageAlt}
                        />
                    </div>
                {/each}
            {/if}
        </div>
    </main>
</section>

<style>
   
   .gallery {
        margin-top: 2rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 1.5rem;
    }


    .item {
        box-shadow: 0px 0px 5px 1px rgba(128, 128, 128, 0.7);
    }

    .filter-label {
        display: block;
        text-align: center;
        font-size: 18px;
        margin-bottom: 10px;
        font-weight: bold;
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

    .tag {
        font-size: 16px;
        padding: 5px;
        background-color: lightgray;
        font-size: 18px;
        border-radius: 0.5rem;
        border: 1px solid transparent;
        box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
        box-sizing: border-box;
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

    /* :root {
        --card-height: 400px;
    } */
</style>
