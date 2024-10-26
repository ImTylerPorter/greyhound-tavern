<script>
	import { page } from '$app/stores';
	let formState = $state({
		name: '',
		email: '',
		message: '',
		formError: ''
	});
	let messageSent = false;
	/**
	 * @type {string | null}
	 */

	const submitForm = async (/** @type {{ preventDefault: () => void; }} */ event) => {
		event.preventDefault();
		const formData = new FormData();
		formData.append('name', formState.name);
		formData.append('email', formState.email);
		formData.append('message', formState.message);

		// Assuming your server route is the same as where this form is located
		const response = await fetch($page.url.pathname, {
			method: 'POST',
			body: formData
		});

		if (!response.ok) {
			const errorData = await response.json();
			if (errorData && errorData.error && errorData.error.message) {
				formState.formError = errorData.error.message;
			} else {
				formState.formError = 'An unexpected error occurred';
			}
			return;
		}
		const data = await response.json();
		if (data.status === 200) {
			formState.formError = '';
			// Show success message
			messageSent = true;
		} else {
			formState.formError = 'An error occurred';
		}
	};
</script>

<form>
	{#if formState.formError}
		<p style="color:red;">{formState.formError}</p>
	{/if}
	<label>
		<span>Name</span>
		<input type="text" name="name" bind:value={formState.name} />
	</label>
	<label>
		<span>Email</span>
		<input type="email" name="email" bind:value={formState.email} />
	</label>
	<label>
		<span>Message</span>
		<textarea name="message" bind:value={formState.message}></textarea>
	</label>
	<button type="submit">Send</button>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	label {
		color: var(--white);
		margin-bottom: 5px;
		font-size: 16px;
	}
	label span {
		display: block;
		margin-bottom: 5px;
	}
	input,
	textarea {
		border-radius: 10px;
		background: var(--white);
		color: var(--black);
		font-size: 14px;
		outline: solid 1px var(--gold);
		padding: 10px 20px;
		width: -webkit-fill-available;
	}
	textarea {
		min-height: 250px;
	}

	button {
		border: none;
		align-self: center;
	}
</style>
