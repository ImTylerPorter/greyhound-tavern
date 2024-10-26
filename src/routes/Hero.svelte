<section>
	<div class="backgroundImage">
		<img src="/images/home-bg.jpg" alt="Old Newspaper article announcing Greyhound Tavern" />
	</div>
	<div class="heroContent">
		<p class="preTitle">Classic Nostalgia</p>
		<h1>Flame-kissed pizzas, high-score bites, and tunes that ignite!</h1>
		<div class="content">
			<p>
				Welcome to Greyhound Tavern in Downtown Albany! Enjoy our artisanal wood-fired pizzas with a
				smoky twist. Our venue features classic and modern arcades for entertainment. Dive into live
				music at our full-bar setting as the night unfolds. We’re not just a restaurant; we’re a
				community hub blending delicious food, entertainment, and vibrant ambiance. Come and
				experience wood-fired excellence, nostalgia, and live music in the heart of Albany.
			</p>
		</div>
	</div>
</section>

<style>
	section {
		background: var(--grey);
		position: relative;
	}

	.backgroundImage {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		opacity: 0.2;
		z-index: 1;
	}

	.backgroundImage img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	.heroContent {
		position: relative;
		width: 1220px;
		max-width: 90%;
		margin: 0 auto;
		padding: 120px 0;
		text-align: center;
		z-index: 2;
	}
	h1 {
		font-family: 'Gin';
		color: var(--white);
		font-size: 88px;
		margin-top: 15px;
		margin-bottom: 25px;
		line-height: 1;
	}

	p {
		color: var(--white);
		font-size: 20px;
		line-height: 1;
	}
	p.preTitle {
		color: var(--gold);
		font-size: 46px;
		font-family: 'Eastwood';
		margin: 0;
	}

	.content {
		width: 900px;
		max-width: 90%;
		margin: 0 auto;
	}

	@media (max-width: 900px) {
		h1 {
			font-size: 60px;
		}
		.preTitle {
			font-size: 36px;
		}
	}
</style>
