<script>
	import Header from "./Header.svelte";
	import "./styles.css";
	import github from '$lib/images/github.svg'
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<!-- <footer>
		<a href="https://github.com/coxco96/">
			<img class='github' src={github} alt="GitHub" />
		</a>
			View the source code for this site.
	</footer> -->
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	.github {
		width: 3em;
		height: 3em;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
