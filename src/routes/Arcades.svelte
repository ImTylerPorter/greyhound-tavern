<script>
	import AngleBackground from '../components/AngleBackground.svelte';
	import ColorBorder from '../components/ColorBorder.svelte';
	import SectionTitle from '../components/SectionTitle.svelte';
</script>

<section id="arcades">
	<div class="arcadeContent">
		<SectionTitle title="Got Game?" />
		<div class="moveMeDown">
			<p>
				Step into our arcade wonderland and relive the glory days of gaming. Our collection features
				a mix of classic arcade games and modern pinball machines, ensuring endless hours of
				entertainment for gamers of all ages.
			</p>
			<div class="arcadeList">
				<p><span></span>Asteroids</p>
				<p><span></span>Ms. Pac-Man</p>
				<p><span></span>Centipede</p>
				<p><span></span>Frogger</p>
				<p><span></span>Batman</p>
				<p><span></span>Led Zepplin</p>
				<p><span></span>NBA JAM</p>
				<p><span></span>Big Buck Hunter</p>
				<p><span></span>Godzilla</p>
				<p><span></span>And Many More…</p>
			</div>
		</div>
	</div>

	<AngleBackground />
	<div class="arcadeImage">
		<div class="overlay"></div>
		<img src="/images/pinballs.jpg" alt="Pinball Machines @ Greyhound Tavern" />
	</div>
	<ColorBorder />
</section>

<style>
	section {
		background: var(--tan);
		position: relative;
		width: 100%;
		padding-bottom: 400px;
		z-index: 9;
	}
	.arcadeContent {
		position: relative;
		z-index: 9;
		width: 960px;
		max-width: 90%;
		margin: 0 auto;
	}
	.arcadeContent p {
		font-size: 20px;
		color: var(--text);
	}
	.moveMeDown {
		margin-top: 30px;
	}
	.arcadeList {
		display: flex;
		gap: 25px;
		justify-content: center;
		flex-flow: row wrap;
		width: 700px;
		max-width: 100%;
		margin: 50px auto 0;
	}
	.arcadeList p {
		line-height: 1;
	}
	.arcadeList span {
		width: 6px;
		height: 6px;
		background: var(--gold);
		border-radius: 50%;
		display: inline-flex;
		margin-right: 5px;
		margin-bottom: 2px;
	}
	.arcadeImage {
		position: absolute;
		z-index: 29;
		height: 588px;
		border-radius: 25px;
		left: 50%;
		bottom: -33%;
		transform: translateX(-50%);
	}

	.arcadeImage .overlay {
		background: var(--orange);
		opacity: 0.35;
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		height: 100%;
		width: 101%;
		border-radius: 25px;
	}

	.arcadeImage img {
		height: 100%;
		width: 900px;
		max-width: 100%;
		display: block;
		object-fit: cover;
		object-position: center;
		border-radius: 25px;
		outline: 8px solid var(--gold);
		border: 8px solid var(--orange);
	}

	@media (max-width: 800px) {
		.arcadeImage {
			height: auto;
			bottom: -15%;
		}
	}
	@media (max-width: 700px) {
		.arcadeImage {
			width: 90%;
		}
	}
</style>
