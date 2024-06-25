<script>
	import Gallery from './Gallery.svelte';
	export let data;
	let items = data.items;
</script>

<svelte:head>
	<title>Portfolio</title>
	<meta name="description" content="Portfolio" />
</svelte:head>


<Gallery {items} />



