<script>
	// @ts-nocheck
	import { page } from '$app/stores';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	let { menuItem } = $props();
	console.log(menuItem);
	let formError = $state('');

	function handleBackgroundClick(event) {
		if (event.target.classList.contains('modal')) {
			dispatch('close');
		}
	}

	async function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		formData.append('actionType', `updateMenuItem`);
		formData.append('id', menuItem.id);

		try {
			const response = await fetch($page.url.pathname, {
				method: 'POST',
				body: formData
			});
			const result = await response.json();
			const data = JSON.parse(result.data);
			console.log(data);
			const updatedMenuItem = { id: data[2], name: data[3], description: data[4], order: data[5] };
			console.log(updatedMenuItem);

			dispatch('menuItemUpdated', updatedMenuItem);

			formError = response.ok
				? 'Awesome, updated!'
				: result.error.message || 'Operation failed. Humanity still not advanced enough.';
		} catch (err) {
			formError = 'An error occurred. Did we break the space-time continuum?';
		}
	}
</script>

<div class="modal" onclick={handleBackgroundClick}>
	<div class="modal-content">
		<h3>Edit Menu Item</h3>
		<form method="post" onsubmit={handleSubmit}>
			<label>
				<span>Name</span>
				<input type="text" name="name" bind:value={menuItem.name} />
			</label>
			<label>
				<span>Description</span>
				<textarea name="description" bind:value={menuItem.description}></textarea>
			</label>
			<label>
				<span>Order</span>
				<input type="number" name="order" bind:value={menuItem.order} />
			</label>
			<div class="buttons">
				<button type="submit">Save</button>
				<button class="close" onclick={() => dispatch('close')}>Cancel</button>
			</div>
			<div class="delete">
				<a
					href="/dashboard/menu/delete?id={menuItem.id}&catId={menuItem.categoryId}"
					onclick={(e) =>
						!confirm(`Are you really sure you want to delete "${menuItem.name}"`) &&
						e.preventDefault()}>DELETE</a
				>
			</div>
		</form>
	</div>
</div>

<style>
	.modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.modal-content {
		background: white;
		padding: 20px;
		border-radius: 5px;
		max-width: 400px;
		width: 100%;
	}

	h3 {
		font-size: 2rem;
		letter-spacing: 4px;
		text-transform: uppercase;
		color: var(--orange);
	}

	form,
	label {
		display: flex;
		flex-direction: column;
	}

	form {
		gap: 10px;
	}
	label span {
		font-weight: bold;
		font-size: 1.4rem;
	}

	input {
		min-height: 30px;
		font-size: 1.2rem;
	}
	input:focus-visible,
	textarea:focus-visible {
		outline-color: var(--orange);
	}
	textarea {
		min-height: 150px;
		font-size: 1.2rem;
		padding: 5px;
	}
	.buttons {
		display: flex;
		justify-content: space-between;
		margin-top: 20px;
	}
	button {
		border: none;
		display: block;
	}
	.close {
		background: transparent;
		border: 1px solid var(--orange);
		color: var(--orange);
	}
	.close:hover {
		background: var(--orange);
		color: var(--white);
	}
</style>
