<script>
	// import PinNav from "./PinNav.svelte";
	import ".././styles.css";
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
	// import github from '$lib/images/github.svg'
</script>

<div class="app page-background">

		<main>
			{@render children?.()}
		</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
        background: rgb(232, 233, 237);
        padding: 50px 10px;
	}





</style>
