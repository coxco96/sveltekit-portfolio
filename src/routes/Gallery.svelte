<script>
    import Card from "./Card.svelte";
    let { items } = $props();

    // create list of unique tags
    let allTags = $derived(
        [...new Set(items.map((item) => item.tags).flat())].sort(),
    );
    let filters = $derived([]);
    let filtered = $derived(
        items.filter((item) => {
            if (item.tags.some((x) => filters.includes(x))) {
                return true; // returns true if filters list includes any of item's tags
            }
        }),
    );

    function filterClick(tag) {
        // if filters array does not already include clicked tag, add it
        if (!filters.includes(tag)) {
            filters = [...filters, tag];
        } else {
            // if it is already included, remove it
            filters = filters.filter((x) => x != tag);
        }
    }

</script>

<section>
    <p class="filter-label">Filter by:</p>
    <div
        role="group"
        aria-label="Filter items in portfolio"
        class="filter-buttons"
    >
        {#each allTags as tag}
            {#if tag != "Other"}
                <button
                    class="tag {filters.includes(tag) ? 'active-filter' : ''}"
                    onclick={() => filterClick(tag)}
                    aria-label="Filter by {tag}"
                    aria-pressed={filters.includes(tag)}
                >
                    {tag}
                </button>
            {/if}
        {/each}
        <button
            class="tag {filters.includes('Other') ? 'active-filter' : ''}"
            onclick={() => filterClick("Other")}
            aria-label="Filter by {'Other'}"
            aria-pressed={filters.includes("Other")}
        >
            {"Other"}
        </button>
    </div>

    <main>
        <div class="gallery">
            {#each filtered.length === 0 ? items : filtered as item}
                <div class="item">
                    <Card
                        title={item.title}
                        publication={item.publication}
                        type={item.type}
                        link={item.link}
                        src={item.image}
                        slug={item.slug}
                        subtitle={item.subtitle}
                        alt={item.imageAlt}
                        externalUrl={item.externalUrl}
                    />
                </div>
            {/each}
        </div>
    </main>
</section>

<style>
    .gallery {
        column-count: 1;
        column-gap: 1.5rem;
        margin-top: 2rem;
    }

    @media (min-width: 640px) {
        .gallery {
            column-count: 2;
        }
    }

    @media (min-width: 768px) {
        .gallery {
            column-count: 3;
        }
    }

    @media (min-width: 1024px) {
        .gallery {
            column-count: 4;
        }
    }

    .item {
        /* width: 100%; */
        break-inside: avoid;
        margin-bottom: 1.5rem;
        /* box-shadow: 0px 0px 5px 1px rgba(128, 128, 128, 0.7); */
    }

    .filter-label {
        letter-spacing: -0.03em;
        margin: 0;
        color: rgba(240, 240, 240, 0.92);
        border-bottom: 1px rgba(240, 240, 240, 0.5) solid;
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
        /* font-size: 16px;
        padding: 5px;
        background-color: lightgray;
        font-size: 18px;
        border-radius: 0.5rem;
        border: 1px solid transparent;
        box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
        box-sizing: border-box; */
        background: rgba(255, 255, 255, 0.09);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        color: #f0f0f0;
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: 999px;
        padding: 0.4rem 1rem;
        font-size: 1rem;
        font-weight: 500;
        margin: 0.25rem;
        cursor: pointer;
        transition:
            background 0.2s ease,
            transform 0.2s ease;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
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
