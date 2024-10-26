<script>
	import ColorBorder from '../components/ColorBorder.svelte';
</script>

<footer class="footer">
	<div class="container">
		<div class="contact">
			<div class="location">
				<span
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24.062"
						height="32"
						viewBox="0 0 24.062 32"
					>
						<path
							id="location-dot"
							d="M10.546,31.281C7.275,27.258,0,17.508,0,12.031a12.031,12.031,0,1,1,24.062,0c0,5.477-7.331,15.227-10.546,19.25a1.893,1.893,0,0,1-2.97,0Zm1.485-15.239a4.01,4.01,0,1,0-4.01-4.01A4.014,4.014,0,0,0,12.031,16.042Z"
							fill="#dfb03a"
						/>
					</svg>
				</span>
				<p>220 2nd Ave S.W. Albany, OR 97321</p>
			</div>
			<div class="phone">
				<span
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="31.995"
						height="32"
						viewBox="0 0 31.995 32"
					>
						<path
							id="phone"
							d="M31.948,24.181,30.5,30.48a1.942,1.942,0,0,1-1.9,1.514A28.624,28.624,0,0,1,0,3.4,1.941,1.941,0,0,1,1.514,1.5L7.813.044a1.961,1.961,0,0,1,2.236,1.132l2.907,6.781a1.956,1.956,0,0,1-.561,2.278l-3.365,2.7A21.853,21.853,0,0,0,19,22.906l2.755-3.362a1.944,1.944,0,0,1,2.279-.561l6.781,2.907A2.131,2.131,0,0,1,31.948,24.181Z"
							transform="translate(0 0.006)"
							fill="#dfb03a"
						/>
					</svg>
				</span>
				<a href="tel:4582534049">458.253.4049</a>
			</div>
			<div class="copy">
				<p>📷: <a href="https://kenslerphotography.com/" target="_BLANK">Kensler Photography</a></p>
			</div>
		</div>
		<div class="hours">
			<span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="27.995"
					height="27.995"
					viewBox="0 0 27.995 27.995"
				>
					<path
						id="clock"
						d="M14,28A14,14,0,1,1,28,14,14,14,0,0,1,14,28ZM12.685,14a1.174,1.174,0,0,0,.585,1.044l5.249,3.5a1.2,1.2,0,0,0,1.772-.317,1.266,1.266,0,0,0-.317-1.821L15.31,13.3V6.561a1.321,1.321,0,0,0-1.361-1.312,1.342,1.342,0,0,0-1.312,1.312Z"
						fill="#dfb03a"
					/>
				</svg>
			</span>
			<div>
				<!-- <p>Monday: 11:00 am to 10:00 pmish</p>
				<p>Tuesday: 11:00 am to 10:00 pmish</p>
				<p>Wednesday: 11:00 am to 10:00 pmish</p>
				<p>Thursday: 11:00 am to 10:00 pmish</p>
				<p>Friday: 11:00 am to 2:00 am</p>
				<p>Saturday: 11:00 am to 2:00 am</p> -->
				<p>Temporarily Closed</p>
			</div>
		</div>
	</div>
	<ColorBorder />
</footer>

<style>
	footer {
		width: 100%;
		background: #383836;
		padding: 50px 0 66px;
		position: relative;
		overflow: visible;
		z-index: 9;
		background-size: cover;
		background-repeat: no-repeat;
	}
	.container {
		width: 90%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		flex-flow: row wrap;
	}

	.contact {
		margin: 0;
	}

	.copy {
		margin-top: 40px;
		color: var(--white);
	}

	.copy p {
		font-size: 15px;
	}
	.copy a {
		color: var(--white);
	}
	a:hover {
		color: var(--gold);
	}
	.location,
	.phone {
		display: flex;
		align-items: center;
		gap: 15px;
	}
	.location p,
	.phone a {
		color: var(--white);
		font-size: 18px;
		margin: 0;
		line-height: 1;
	}
	.phone a:hover {
		color: var(--gold);
	}
	.location {
		margin-bottom: 25px;
	}
	.hours {
		display: flex;
		gap: 15px;
	}
	.hours p {
		color: var(--white);
		font-size: 18px;
		line-height: 1;
	}
	@media (max-width: 960px) {
		.container {
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 25px;
		}
	}
</style>
