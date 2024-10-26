<script>
	// @ts-nocheck
	import SectionTitle from '../components/SectionTitle.svelte';
	let { events } = $props();
</script>

<section id="events">
	<SectionTitle title="Events" color="white" />
	<div class="eventContent">
		<div class="events event-{events.length}">
			{#if events.length != 0}
				{#each events as event}
					<div class="event">
						<div class="image">
							<img src={event.image} alt="{event.title} @ Greyhound Tavern" />
						</div>
						<div class="description">
							<h4>{event.title}</h4>
							<h5>{event.date}</h5>
							<a href="X" class="button neg" target="_BLANK">More Info</a>
						</div>
					</div>
				{/each}
			{:else}
				<div class="noEvents">
					<h4>Events incoming... stay tuned!</h4>
				</div>
			{/if}
		</div>
	</div>
</section>

<style>
	section {
		background: var(--grey);
		padding: 50px 0 120px;
		position: relative;
		z-index: 9;
	}
	.eventContent {
		max-width: 1220px;
		width: 90%;
		margin: 0 auto;
	}
	.events {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 20px;
		margin-top: 50px;
	}
	.event-1,
	.event-2,
	.event-3 {
		grid-template-columns: repeat(auto-fit, 290px);
		justify-content: center;
	}

	.event {
		background: var(--tan);
	}
	.event .image {
		height: 152px;
	}
	.event .image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}
	.event .description {
		padding: 25px;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 19 0px;
	}

	.event h4 {
		font-weight: normal;
		font-size: 20px;
		margin: 0;
		line-height: 1;
	}
	.event h5 {
		color: var(--orange);
		font-size: 25px;
		font-weight: normal;
		margin: 0;
	}

	.button {
		border-color: var(--lightGrey);
		color: var(--grey);
		align-self: center;
		margin-top: 20px;
	}
	.button:hover {
		background: transparent !important;
		border-color: var(--orange);
		color: var(--orange);
	}

	.noEvents {
		grid-column: span 4;
	}
	.noEvents h4 {
		color: var(--white);
		text-align: center;
		font-size: 3rem;
	}
	@media (max-width: 1068px) {
		.events {
			grid-template-columns: repeat(3, 1fr);
		}
	}
	@media (max-width: 800px) {
		.events {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media (max-width: 500px) {
		.events {
			grid-template-columns: 1fr;
		}
	}
</style>
