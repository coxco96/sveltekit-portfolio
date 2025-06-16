<script>
	// import PinNav from "./PinNav.svelte";
	import "./styles.css";
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
	// import github from '$lib/images/github.svg'
</script>

<svelte:head>
	<link
		rel="preload"
		as="image"
		href="/images/backgrounds/on-earth-we-bleed1.webp"
		type="image/webp"
		media="(min-width: 641px)"
	/>

	<!-- <link
		rel="preload"
		as="image"
		href="/images/backgrounds/mobile-on-earth-we-bleed1.jpg"
		type="image/jpeg"
		media="(max-width: 640px)"
	/> -->
</svelte:head>

<div class="app page-background">
	<!-- <PinNav /> -->

	<main>
		{@render children?.()}
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.page-background {
		background-color: rgb(1, 1, 27);
		background-image: url("/images/backgrounds/on-earth-we-bleed1.webp");
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		background-attachment: fixed;
		min-height: 100vh;
		width: 100%;
		padding: 2rem;
		box-sizing: border-box;
	}

	@media (max-width: 640px) {
		.page-background {
			background-image: none;
			
		}
	}

	/* retina → 2× source */
@media (min-width: 641px) and (-webkit-min-device-pixel-ratio: 2),
       (min-width: 641px) and (min-resolution: 192dpi) {
  .page-background {
    background-image: url("/images/backgrounds/on-earth-we-bleed1@2x.webp");
  }
}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 100%;
		/* max-width: 64rem; */
		margin: 0 auto;
		box-sizing: border-box;
	}

	.github {
		width: 3em;
		height: 3em;
	}
</style>
