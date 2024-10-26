<script>
	// @ts-nocheck
	import AngleBackground from '../components/AngleBackground.svelte';
	import SectionTitle from '../components/SectionTitle.svelte';
	let { data } = $props();
	let activeMenu = $state(0);

	function toggleMenu(index) {
		activeMenu = index;
	}
</script>

<section>
	<div class="menuContent">
		<SectionTitle title="Menu" />

		<div class="menuItemsNav">
			{#each data?.menu as item, i}
				<div
					onclick={() => {
						toggleMenu(i);
					}}
					class="navItem"
					class:active={activeMenu === i}
					role="button"
					tabindex={i}
				>
					<p>{item.name}</p>
				</div>
			{/each}
		</div>

		<div class="menuItemsContentWrap">
			{#each data?.menu as item, i}
				{#if activeMenu === i}
					<div class="menuItemContent">
						{#each item.items as subItem}
							<div class="item">
								<h4>{subItem.title}</h4>
								<p>{subItem.description}</p>
							</div>
						{/each}
					</div>
				{/if}
			{/each}
		</div>
	</div>

	<AngleBackground />
</section>

<style>
	section {
		background: var(--tan);
		position: relative;
		width: 100%;
		padding-bottom: 50px;
		min-height: 700px;
	}
	.menuContent {
		position: relative;
		z-index: 9;
		width: 960px;
		max-width: 90%;
		margin: 0 auto;
	}
	.menuItemsNav {
		display: flex;
		justify-content: center;
		gap: 25px;
		padding: 20px 0;
		flex-flow: row wrap;
	}
	.navItem {
		border: 2px solid var(--lightGray);
		padding: 15px 30px;
		transition: all 300ms;
	}
	.navItem.active,
	.navItem:hover {
		border-color: var(--orange);
		cursor: pointer;
	}
	.navItem.active p,
	.navItem:hover p {
		color: var(--orange);
	}
	.navItem p {
		margin: 0;
		font-size: 20px;
	}
	.item h4 {
		margin-bottom: 0px;
	}
	.item h4,
	.item p {
		font-size: 20px;
	}
</style>
