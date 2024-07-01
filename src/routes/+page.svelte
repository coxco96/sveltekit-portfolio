<script>
	import Gallery from "./portfolio/Gallery.svelte";
	export let data;
	let items = data.items;

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Courtney Cox Portfolio" />
</svelte:head>

<section>
	<h1>Hi, I'm Court.</h1>
	<p>
		I design and develop <strong>data experiences</strong>.
	</p>
</section>

<Gallery {items} />

<style>
	:root {
		--card-height: 400px;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

</style>
