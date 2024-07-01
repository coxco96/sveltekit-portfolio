<script>
	import Gallery from "./Gallery.svelte";
	import Card from './Card.svelte';
	export let data;
	let items = data.items;

	let introCard =  {
        'title': `Hi, I'm Court!`,
        'subtitle': `
        <p>My full-name is <strong>Courtney Cox</strong> (but nope, not <a href='https://en.wikipedia.org/wiki/Courteney_Cox' target='_blank'>that one</a>).</p>
        <p>I was a 2023-24 <a href="https://www.nytco.com/person/courtney-cox/">New York Times fellow</a> in the Upshot section.</p>
        <p>My work has appeared in the <a href="https://www.nytimes.com/by/courtney-cox">New York Times</a>, Miami Herald, McClatchy D.C. Bureau, Tacoma News Tribune, and <a href="https://uknow.uky.edu/authors/court-cox">UKNow</a> (University of Kentucky News).</p>
        <p><strong><em>This website is currently under construction, so check back later for more!</em></strong></p>
        `,
        'type': 'About Me',
        'publication': 'Personal',
        'tags': ['About Me'],
        'slug': 'slug',
        'cardHeight': 'auto',
        'includeImageOnFeaturePage': false,
        'contentBlockOne': `<p><strong><em>This website is currently under construction, so check back later for more!</em></strong></p>
        `
    };

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Courtney Cox Portfolio" />
</svelte:head>


<Gallery {items} />

<style>
	:root {
		--card-height: 400px;
	}

</style>
