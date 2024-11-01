<script>
	import { page } from '$app/stores';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	let name = $state('');
	let formError = $state('');

	async function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		formData.append('actionType', `menuCat`);

		try {
			const response = await fetch($page.url.pathname, {
				method: 'POST',
				body: formData
			});
			const result = await response.json();
			const data = JSON.parse(result.data);
			const newMenuCategory = { id: data[2], name: data[3], description: null, parentId: null };

			dispatch('newCategoryCreated', newMenuCategory);

			formError = response.ok
				? 'Awesome, created!'
				: result.error.message || 'Operation failed. Humanity still not advanced enough.';
		} catch (err) {
			formError = 'An error occurred. Did we break the space-time continuum?';
		}
	}
</script>

<form method="post" onsubmit={handleSubmit}>
	<label>
		<input placeholder="Name" type="text" name="name" bind:value={name} />
	</label>
	<button type="submit">Add</button>
</form>

<style>
	form {
		padding: 10px;
		display: flex;
		gap: 10px;
	}
	input {
		min-height: 20px;
	}
	button {
		padding: 5px 25px;
		border: none;
		font-size: 1.2rem;
		line-height: 1.2;
	}
</style>
