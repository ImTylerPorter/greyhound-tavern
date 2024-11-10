<script>
	import { page } from '$app/stores';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	let { activeCat, total } = $props();
	let name = $state('');
	let description = $state('');
	let order = $state(total + 1);
	let formError = $state('');

	async function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		formData.append('actionType', `menuItem`);
		// @ts-ignore
		formData.append('categoryId', activeCat);

		try {
			const response = await fetch($page.url.pathname, {
				method: 'POST',
				body: formData
			});
			const result = await response.json();
			const data = JSON.parse(result.data);
			const newMenuItem = { id: data[2], name: data[3], description: data[4], order: data[5] };

			dispatch('newMenuItemCreated', newMenuItem);

			formError = response.ok
				? 'Awesome, created!'
				: result.error.message || 'Operation failed. Humanity still not advanced enough.';
		} catch (err) {
			formError = 'An error occurred. Did we break the space-time continuum?';
		}
	}
	function clearError() {
		formError = '';
	}
</script>

<div>
	{#if formError}
		<p class="error">{formError}</p>
	{/if}
	<form method="post" onsubmit={handleSubmit}>
		<label>
			<span>Name</span>
			<input type="text" name="name" bind:value={name} />
		</label>
		<label>
			<span>Description</span>
			<textarea placeholder="Enter description" name="description" bind:value={description} />
		</label>
		<label>
			<span>Order</span>
			<input type="number" name="order" bind:value={order} />
		</label>
		<button type="submit">Add Menu Item</button>
	</form>
</div>

<style>
	div {
		padding: 20px;
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
	button {
		border: none;
		display: block;
	}
</style>
