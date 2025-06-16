<script>
    import Card from "./Card.svelte";
    import { base } from "$app/paths";
    import { goto } from "$app/navigation";
    let { items } = $props();

    // create list of unique tags, sorted alphabetically but with "Other" forced to the end
    let allTags = $derived(
        (() => {
            const unique = [...new Set(items.flatMap((item) => item.tags))];
            const sorted = unique
                .filter((t) => t !== "Other")
                .sort((a, b) =>
                    a.localeCompare(b, undefined, { sensitivity: "base" }),
                );
            if (unique.includes("Other")) sorted.push("Other");
            return sorted;
        })(),
    );

    // user-selected filter tags
    let filters = $derived([]);

    // items filtered by selected tags
    let filtered = $derived(
        items.filter((item) => item.tags.some((tag) => filters.includes(tag))),
    );

    function filterClick(tag) {
        if (!filters.includes(tag)) {
            filters = [...filters, tag];
        } else {
            filters = filters.filter((x) => x !== tag);
        }
    }

    function handleClick(item) {
        let href = item.externalUrl ?? `${base}/${item.slug}`;
        if (item.externalUrl) {
            window.open(href, "_blank");
        } else {
            goto(href);
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
            <button
                class="tag {filters.includes(tag) ? 'active-filter' : ''}"
                onclick={() => filterClick(tag)}
                aria-label="Filter by {tag}"
                aria-pressed={filters.includes(tag)}
            >
                {tag}
            </button>
        {/each}
    </div>

    <main>
        <div class="gallery">
            {#each filtered.length === 0 ? items : filtered as item (item.title)}
                <button
                    type="button"
                    class="item-btn"
                    onclick={() => handleClick(item)}
                    aria-label={`View details for ${item.title}`}
                >
                    <div class="item">
                        <Card
                            title={item.title}
                            publication={item.publication}
                            type={item.type}
                            src={item.image}
                            alt={item.imageAlt}
                            slug={item.slug}
                            externalUrl={item.externalUrl}
                        />
                    </div>
                </button>
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
    .item-btn {
        background: none;
        border: none;
        padding: 0;
        margin: 0;
        width: 100%;
        text-align: inherit;
        cursor: pointer;
        display: block;
        
    }
    .item-btn:focus {
        outline: 2px solid #fff;
        outline-offset: 2px;
    }
    .item {
        break-inside: avoid;
        margin-bottom: 1.5rem;
        width: 100%;
    }

    .filter-label {
        letter-spacing: -0.03em;
        margin: 0;
        color: rgba(240, 240, 240, 0.92);
        border-bottom: 1px solid rgba(240, 240, 240, 0.5);
        text-align: center;
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .filter-buttons {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 5px 2px;
        margin-bottom: 1rem;
    }

    .tag {
        background: rgba(255, 255, 255, 0.09);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        color: #f0f0f0;
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: 999px;
        padding: 0.4rem 1rem;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        transition:
            background 0.2s ease,
            transform 0.2s ease;
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
