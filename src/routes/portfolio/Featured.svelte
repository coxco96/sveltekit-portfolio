<script>
    import Card from "./Card.svelte";
    import ButtonContainer from "./ButtonContainer.svelte";
    export let items;
    export let categories;

    let selected = "all";

    const filterSelection = (e) => (selected = e.target.dataset.name);
</script>

<ButtonContainer>
    {#each categories as category}
        <button
            class:active={selected === category}
            class="btn"
            data-name={category}
            on:click={filterSelection}
        >
            {category}
        </button>
    {/each}
</ButtonContainer>

<div class="text-column">
    <h2>Featured</h2>
</div>

{selected}

<div class="feature-grid">
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
</div>

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
