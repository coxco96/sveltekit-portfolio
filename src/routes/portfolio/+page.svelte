<script>
	import {onMount} from 'svelte';
	import { base } from "$app/paths";
	import Gallery from './Gallery.svelte';
	import mapPin from '$lib/images/map-pin.svg';
	export let data;
	let items = data.items;

	// onMount(() => {
	// 	const scrollPosition = localStorage.getItem('scrollPosition');
	// 	if (scrollPosition) {
	// 		window.scrollTo(0, parseInt(scrollPosition, 10));
	// 		localStorage.removeItem('scrollPosition');
	// 	}
	// });


</script>

<svelte:head>
	<title>Portfolio</title>
	<meta name="description" content="Portfolio" />
</svelte:head>
<section>
	<nav class='welcome'>
<a href='{base}/'>
        <picture>
            <img src={mapPin} alt="map pin" />
        </picture>
	</a>
</nav>
    <h1>
        Hi, I'm Court.<br />
    </h1>

    <p>
        I design and develop <strong>data experiences</strong>.
    </p>
</section>

<Gallery {items} />



