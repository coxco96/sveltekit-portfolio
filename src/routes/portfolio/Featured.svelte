<script>
    import Card from "./Card.svelte";
    export let items;
    let itemOne, itemTwo, itemThree;

    items.forEach((item) => {
        if (item.isFeature == 1) {
            itemOne = item;
        } else if (item.isFeature == 2) {
            itemTwo = item;
        } else if (item.isFeature == 3) {
            itemThree = item;
        }
    });
</script>

<div class="text-column">
    <h2>Featured</h2>
</div>

<div class="feature-grid">
    <div class="feature-col">
        <div class="text-column">
            <h3>Data Analysis</h3>
        </div>
        <a href="../featured-one">
            <Card
                title={itemOne.title}
                publication={itemOne.publication}
                type={itemOne.type}
                link={itemOne.link}
            />
        </a>
    </div>

    <div class="feature-col">
        <div class="text-column">
            <h3>Development</h3>
        </div>
        <a href="../featured-two">
            <Card
                title={itemTwo.title}
                publication={itemTwo.publication}
                type={itemTwo.type}
                link={itemTwo.link}
            />
        </a>
    </div>

    <div class="feature-col">
        <div class="text-column">
            <h3>Interactives</h3>
        </div>
        <a href="../featured-three">
            <Card
                title={itemThree.title}
                publication={itemThree.publication}
                type={itemThree.type}
                link={itemThree.link}
            />
        </a>
    </div>
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
</style>
