<script>
	import Featured from "./Featured.svelte";
	import Gallery from './Gallery.svelte';

	// loads item.js via +page.server.js
	export let data;
	let categories = data.categories;
	console.log(categories);
	let items = data.items;
	let features = items.filter(item => item.isFeature);
	// let gallery = items.filter(item=> !item.isFeature);
	console.log(features);

	
</script>

<svelte:head>
	<title>Portfolio</title>
	<meta name="description" content="Portfolio" />
</svelte:head>


<Featured {items} {categories}/>
<!-- <Gallery items={gallery}/> -->


<!-- <div class="text-column">
	<h1>About this app</h1>

	<p>
		This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make
		your own by typing the following into your command line and following the
		prompts:
	</p>

	<pre>npm create svelte@latest</pre>

	<p>
		The page you're looking at is purely static HTML, with no client-side
		interactivity needed. Because of that, we don't need to load any
		JavaScript. Try viewing the page's source, or opening the devtools
		network panel and reloading.
	</p>

	<p>
		The <a href="/sverdle">Sverdle</a> page illustrates SvelteKit's data loading
		and form handling. Try using it with JavaScript disabled!
	</p>
</div> -->
