<script>
    import items from "./items.json";
    import Col from "./Col.svelte";
    import Grid from "svelte-grid";
    import gridHelp from "svelte-grid/build/helper/index.mjs";

    // to change number of max columns, change the (i % 3) part and extend
    const itemsByCol = (start, max) =>
        items.filter((_, i) => {
            let col = i < max ? i + 1 : (i % max) + 1;
            // let col = (i == 0 ? 1 : i == 1 ? 2 : i == 2 ? 3 : i >= 3 ? (i % 3)+1 : console.log('error'));
            return col == start + 1;
        });

    let maxCols = 3;

    let colOneItems = itemsByCol(0, maxCols);
    let colTwoItems = itemsByCol(1, maxCols);
    let colThreeItems = itemsByCol(2, maxCols);

    let things = [
        {
            6: gridHelp.item({
                x: 0,
                y: 0,
                w: 2,
                h: 2,
            }),
            id: 235226,
        },
    ];

    const breakpoint = 1200;
    const column = 6;

    const cols = [[breakpoint, column]];
</script>

<div>
    <Grid {cols} bind:items={things} let:item>
        <div>{item.id}</div>
    </Grid>
hm.
</div>

<div id="portfolio-grid">
    <Col items={colOneItems} />
    <Col items={colTwoItems} />
    <Col items={colThreeItems} />
</div>

<style>
    #portfolio-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-template-rows: auto;
        column-gap: 5px;
        row-gap: 5px;
        max-width: 100%;
        border: green 4px solid;
    }

    :global(.svlt-grid-shadow) {
        /* Back shadow */
        background: pink;
    }
    :global(.svlt-grid-container) {
        /* Container color */
        background: #eee;
    }
    :global(.svlt-grid-resizer::after) {
        /* Resizer color */
        border-color: white !important;
    }
</style>
