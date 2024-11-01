<script>
	import AddMenuCat from './AddMenuCat.svelte';

	let { data } = $props();
	let { menuCats } = data;
	let menuState = $state({
		addCat: false,
		menuCats,
		activeCat: menuCats ? menuCats[0]?.id : ''
	});

	function toggleAddCat() {
		menuState.addCat = !menuState.addCat;
	}

	function toggleCat(id) {
		menuState.activeCat = id;
		menuState.addCat = false;
	}

	function handleNewCategory(newCategory) {
		menuState.menuCats = [...menuState.menuCats, newCategory.detail];
		menuState.activeCat = newCategory.detail.id;
		menuState.addCat = false;
	}
</script>

<main>
	<div class="container">
		<div class="menuCategories">
			{#if menuState.menuCats?.length}
				<nav>
					{#each menuState.menuCats as cat}
						<a
							role="button"
							onclick={() => toggleCat(cat.id)}
							class:active={menuState.activeCat === cat.id}
						>
							{cat.name}
						</a>
					{/each}
				</nav>
			{/if}
			<div class="addCatWrap">
				<div role="button" onclick={toggleAddCat}>
					+ {menuState.addCat ? 'Hide' : 'Add'} menu category
				</div>
				{#if menuState.addCat}
					<AddMenuCat on:newCategoryCreated={handleNewCategory} />
				{/if}
			</div>
		</div>
	</div>
</main>

<style>
	.menuCategories nav {
		display: flex;
		justify-content: center;
		gap: 10px;
		margin-top: 20px;
	}

	.menuCategories a {
		border: 1px solid #ccc;
		padding: 10px 20px;
		font-size: 1.2rem;
		font-weight: bold;
		text-transform: uppercase;
	}

	.addCatWrap {
		text-align: center;
		align-content: stretch;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 20px;
	}
	.addCatWrap > div {
		cursor: pointer;
		font-size: 1.2rem;
	}
	.active {
		background: #ccc;
		color: black;
	}
</style>
