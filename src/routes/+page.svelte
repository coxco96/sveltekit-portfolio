<script>
    import mapPin from '$lib/images/map-pin.svg';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
    <span class="welcome">
        <picture>
            <img src={mapPin} alt="map pin" />
        </picture>
    </span>
	<h1>
		

		Hi, I'm Court.<br />
	</h1>

	<p>
		I design and develop <strong>data experiences</strong>.
    </p>

	<!-- <Counter /> -->
</section>

<style>
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

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 595 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
