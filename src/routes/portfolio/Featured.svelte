<script>
    import Card from "./Card.svelte";
    export let items;
    // create list of unique tags
    $: allTags = [...new Set(items.map((item) => item.tags).flat())];

    $: filters = [];

    $: filtered = items.filter((item) => {
        if (item.tags.some((x) => filters.includes(x))) {
            return true;
        } // should return true if filters list includes any of item's tags
    });

    function filterClick(e) {
        let tag = e.target.textContent;
        // if filters array does not already include clicked tag, add it
        if (!filters.includes(tag)) {
            // filters.push(tag);
            filters = [...filters, tag];
        } else {
            // if it is already included, remove it
            filters = filters.filter((x) => x != tag);
        }
    }

    $: console.log("reactive", filters);
</script>

{#each allTags as tag}
    <button class="tag" on:click={filterClick}>{tag}</button>
{/each}



<div class="text-column">
    <h2>Featured</h2>
</div>

<div class="feature-grid">
    {#if filtered.length == 0}
    {#each items as item}
    <div class="feature-col">
        <div class="text-column">
            <h3>{item.featureLabel}</h3>
        </div>
        <a href="/portfolio/{item.slug}">
            <Card
                title={item.title}
                publication={item.publication}
                type={item.type}
                link={item.link}
            />
        </a>
    </div>
    {/each}
    {:else}
    {#each filtered as item}
        <div class="feature-col">
            <div class="text-column">
                <h3>{item.featureLabel}</h3>
            </div>
            <a href="/portfolio/{item.slug}">
                <Card
                    title={item.title}
                    publication={item.publication}
                    type={item.type}
                    link={item.link}
                />
            </a>
        </div>
    {/each}
    {/if}
</div>

<!-- {selected} -->

<!-- <div class="feature-grid">
    {#each items as item}
        {#if selected === "all"}
            <div class="feature-col">
                <div class="text-column">
                    <h3>{item.featureLabel}</h3>
                </div>
                <a href="/portfolio/{item.slug}">
                    <Card
                        title={item.title}
                        publication={item.publication}
                        type={item.type}
                        link={item.link}
                    />
                </a>
            </div>
        {:else}
            <div class:show={selected === item.keyword} class="feature-col">
                <div class="text-column">
                    <h3>{item.featureLabel}</h3>
                </div>
                <a href="/portfolio/{item.slug}">
                    <Card
                        title={item.title}
                        publication={item.publication}
                        type={item.type}
                        link={item.link}
                    />
                </a>
            </div>
        {/if}
    {/each}
</div> -->

<style>
    :root {
        --card-width: 300px;
        --card-height: 300px;
        --object-position: "left top";
        --card-bg-color: rgb(226, 226, 255);
    }

    /* .feature-grid {
        display: grid;
    } */

    .feature-col h3 {
        margin-left: auto;
        margin-right: auto;
    }

    .btn:active,
    .active {
        background-color: #000;
        color: white;
    }

    .show {
        display: flex;
    }
</style>
