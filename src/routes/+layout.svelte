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
