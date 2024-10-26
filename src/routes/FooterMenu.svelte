<script>
	import Logo from '../components/Logo.svelte';
	import Nav from '../components/Nav.svelte';
</script>

<section>
	<div class="bottom mobileMenu">
		<div class="borders">
			<div class="menuWrap">
				<a href="/" class="logo">
					<Logo />
				</a>

				<nav class="mainMenu">
					<!-- Main Nav -->
					<Nav location="footer" />
				</nav>
				<div class="social">
					<a aria-label="Facebook" href="https://facebook.com/greyhoundtavernlive" target="_BLANK">
						<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45">
							<circle
								id="Ellipse_2"
								data-name="Ellipse 2"
								cx="22.5"
								cy="22.5"
								r="22.5"
								fill="#dfb03a"
							/>
							<path
								id="facebook-f"
								d="M36.79,15.623l.771-5.026H32.739V7.335a2.513,2.513,0,0,1,2.834-2.716h2.193V.34A26.738,26.738,0,0,0,33.873,0C29.9,0,27.305,2.407,27.305,6.766V10.6H22.89v5.026h4.415V27.774h5.434V15.623Z"
								transform="translate(-7.891 8.598)"
								fill="#b96b43"
							/>
						</svg>
					</a>
					<a
						aria-label="Instagram"
						href="https://instagram.com/greyhoundtavernlive"
						target="_BLANK"
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45">
							<circle
								id="Ellipse_1"
								data-name="Ellipse 1"
								cx="22.5"
								cy="22.5"
								r="22.5"
								fill="#dfb03a"
							/>
							<path
								id="instagram"
								d="M13.818,38.591a7.121,7.121,0,1,0,7.121,7.121A7.11,7.11,0,0,0,13.818,38.591Zm0,11.75a4.629,4.629,0,1,1,4.629-4.629,4.638,4.638,0,0,1-4.629,4.629ZM22.891,38.3a1.661,1.661,0,1,1-1.661-1.661A1.657,1.657,0,0,1,22.891,38.3Zm4.716,1.686a8.219,8.219,0,0,0-2.243-5.819,8.273,8.273,0,0,0-5.819-2.243c-2.293-.13-9.166-.13-11.459,0A8.262,8.262,0,0,0,2.266,34.16,8.246,8.246,0,0,0,.023,39.979c-.13,2.293-.13,9.166,0,11.459a8.219,8.219,0,0,0,2.243,5.819A8.284,8.284,0,0,0,8.085,59.5c2.293.13,9.166.13,11.459,0a8.219,8.219,0,0,0,5.819-2.243,8.273,8.273,0,0,0,2.243-5.819c.13-2.293.13-9.16,0-11.453ZM24.645,53.9A4.687,4.687,0,0,1,22,56.539c-1.828.725-6.166.558-8.187.558s-6.365.161-8.187-.558a4.687,4.687,0,0,1-2.64-2.64c-.725-1.828-.558-6.166-.558-8.187s-.161-6.365.558-8.187a4.687,4.687,0,0,1,2.64-2.64c1.828-.725,6.166-.558,8.187-.558s6.365-.161,8.187.558a4.687,4.687,0,0,1,2.64,2.64c.725,1.828.558,6.166.558,8.187S25.37,52.077,24.645,53.9Z"
								transform="translate(9.027 -23.227)"
								fill="#b96b43"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		align-items: center;
		width: 100%;
		z-index: 3;
		top: 0;
		transition: top 200ms ease-in-out;
		position: relative;
	}
	.logo {
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 250px;
	}
	.bottom {
		width: 100%;
		background: var(--orange);
	}

	.borders {
		margin: 10px 0;
		border-top: 1px solid var(--gold);
		border-bottom: 1px solid var(--gold);
	}
	.menuWrap {
		display: flex;
		align-items: center;
		justify-content: space-around;
		max-width: 90%;
		margin: 10px auto;
	}
	.social {
		display: flex;
		align-items: center;
		gap: 20px;
	}

	.social a {
		display: inline-block;
	}

	.social svg {
		display: block;
	}

	@media (max-width: 1101px) {
		.logo {
			width: auto;
		}

		.menuWrap {
			flex-direction: column;
			text-align: center;
			gap: 25px;
		}

		.social {
			order: 2;
		}
	}
</style>
