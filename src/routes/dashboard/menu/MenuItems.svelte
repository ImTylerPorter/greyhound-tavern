<script>
	// @ts-nocheck
	import AddMenuItem from './AddMenuItem.svelte';
	import EditMenuItem from './EditMenuItem.svelte';

	let { activeCat, menuItems } = $props();
	let menuItemState = $state({
		showMenuItem: false,
		showEditModal: false,
		selectedMenuItem: null
	});

	function toggleAddMenuItem() {
		menuItemState.showMenuItem = !menuItemState.showMenuItem;
	}
	function handleNewMenuItem(newMenuItem) {
		menuItems = [...menuItems, newMenuItem.detail];
		menuItemState.showMenuItem = false;
	}

	function openEditModal(item) {
		menuItemState.selectedMenuItem = { ...item }; // Make a copy to avoid directly modifying the original
		menuItemState.showEditModal = true;
	}

	function handleMenuItemUpdated(event) {
		const updatedItem = event.detail;
		menuItems = menuItems.map((item) => (item.id === updatedItem.id ? updatedItem : item));
		menuItemState.showEditModal = false;
	}
</script>

<section>
	<header>
		<h2>Menu Items</h2>
		<a onclick={toggleAddMenuItem}>+ ADD MENU ITEM</a>
	</header>
	{#if menuItemState.showMenuItem}
		<AddMenuItem {activeCat} on:newMenuItemCreated={handleNewMenuItem} />
	{/if}
	{#if menuItems}
		<ul>
			{#each menuItems as item}
				<li onclick={() => openEditModal(item)}>
					<h4>{item.name}</h4>
					<p>{item.description}</p>
				</li>
			{/each}
		</ul>
	{/if}
</section>

{#if menuItemState.showEditModal}
	<EditMenuItem
		menuItem={menuItemState.selectedMenuItem}
		on:menuItemUpdated={handleMenuItemUpdated}
		on:close={() => (menuItemState.showEditModal = false)}
	/>
{/if}

<style>
	section {
		width: 600px;
		max-width: 100%;
		margin: 0 auto;
		border: 1px solid #ccc;
		margin: 50px auto;
	}
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		min-height: 75px;
		padding: 0 20px;
		background: var(--gold);
	}
	h2 {
		font-size: 2rem;
		text-align: center;
		letter-spacing: 4px;
		font-weight: bold;
		text-transform: uppercase;
		margin: 0;
	}
	a {
		font-size: 1.8rem;
		font-weight: bold;
		color: var(--orange);
		cursor: pointer;
	}
	a:hover {
		color: black;
	}
	ul {
		margin: 0;
		padding: 0;
		list-style-type: none;
	}
	li {
		padding: 20px;
		cursor: pointer;
		background: white;
	}
	li:hover {
		transform: scale(1.1);
		box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3);
	}
	li:nth-child(even) {
		background: #ccc;
	}

	li h4,
	li p {
		margin: 0;
	}
	h4 {
		font-size: 2rem;
		font-weight: black;
		line-height: 1.4;
	}
	p {
		font-size: 1.6rem;
	}
</style>
