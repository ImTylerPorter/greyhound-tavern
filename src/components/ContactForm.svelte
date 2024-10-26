<script>
	let formState = $state({
		name: '',
		email: '',
		message: ''
	});
</script>

<form>
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
		width: 100%;
	}
	textarea {
		min-height: 250px;
	}

	button {
		border: none;
		align-self: center;
	}
</style>
