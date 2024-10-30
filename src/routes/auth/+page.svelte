<script>
	import { page } from '$app/stores';
	import Logo from '../../components/Logo.svelte';

	let formState = $state({
		email: '',
		password: '',
		confirmPassword: '',
		passphrase: '',
		profilePhoto: null,
		previewSrc: '',
		session: null,
		error: '',
		isLogin: true
	});

	function toggleForm() {
		formState.isLogin = !formState.isLogin;
	}

	function clearError() {
		formState.error = '';
	}

	async function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		const { isLogin, password, email, confirmPassword, passphrase } = formState;

		if (!email) {
			formState.error = 'Email? Never heard of it!';
			return;
		}
		if (!password) {
			formState.error = 'Password? You must be new here.';
			return;
		}
		if (!isLogin) {
			if (!passphrase) {
				formState.error = "Passphrase? It's like a password, but cooler.";
				return;
			}
			if (password !== confirmPassword) {
				formState.error = "Passwords don't match. Did you blink?";
				return;
			}
		}

		if (isLogin) formData.append('isLogin', `${isLogin}`);
		if (!isLogin) formData.append('passphrase', passphrase);

		try {
			const response = await fetch($page.url.pathname, {
				method: 'POST',
				body: formData
			});
			const result = await response.json();
			formState.error = response.ok
				? 'Logged in!'
				: result.error.message || 'Operation failed. Humanity still not advanced enough.';
		} catch (err) {
			formState.error = 'An error occurred. Did we break the space-time continuum?';
		}
	}
</script>

<main>
	<div class="container">
		<div class="card">
			<header>
				<a href="/" class="logo">
					<Logo />
				</a>
			</header>
			<h1>{formState.isLogin ? 'Login' : 'Sign Up'}</h1>
			{#if formState.error}
				<p class="error">{formState.error}</p>
			{/if}
			<form class="form" onsubmit={handleSubmit}>
				<label>
					<span>Email</span>
					<input
						required
						type="email"
						name="email"
						bind:value={formState.email}
						oninput={clearError}
					/>
				</label>
				<label>
					<span>Password</span>
					<input
						required
						type="password"
						name="password"
						bind:value={formState.password}
						oninput={clearError}
					/>
				</label>
				{#if !formState.isLogin}
					<label>
						<span>Confirm Password</span>
						<input
							required
							type="password"
							name="confirmPassword"
							bind:value={formState.confirmPassword}
							oninput={clearError}
						/>
					</label>
					<label>
						<span>Secret Passphrase</span>
						<input
							required
							type="text"
							name="passphrase"
							bind:value={formState.passphrase}
							oninput={clearError}
						/>
					</label>
				{/if}
				<button type="submit">{formState.isLogin ? 'Login' : 'Sign Up'}</button>
			</form>
		</div>
		<div class="details">
			{#if formState.isLogin}
				<p onclick={toggleForm}>Don't have an account?</p>
			{:else}
				<p onclick={toggleForm}>Have an account? Login!</p>
			{/if}
		</div>
	</div>
</main>

<style>
	main {
		background: linear-gradient(to bottom, var(--gold) 70%, var(--orange));
	}
	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 400px;
		height: 100vh;
		max-width: 90%;
	}
	.card {
		margin: 0 auto;
		background: #eee;
		width: 100%;
		box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.5);
	}
	header {
		background: var(--grey);
		padding: 20px;
	}
	h1 {
		font-size: 1.8rem;
		text-transform: uppercase;
		letter-spacing: 2px;
	}
	.logo {
		width: 200px;
		display: block;
		margin: 0 auto;
	}
	.details {
		margin-top: 20px;
	}
	.details p {
		cursor: pointer;
	}
	.error {
		font-weight: bold;
		text-align: center;
		color: var(--orange);
		text-transform: uppercase;
	}

	.form {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	label {
		display: flex;
		flex-direction: column;
		padding: 0 20px;
	}

	label span {
		font-weight: bold;
		font-size: 1.3rem;
	}

	input {
		min-height: 30px;
		border: 1px solid var(--orange);
		text-indent: 5px;
	}
	input:focus-within,
	input:focus {
		outline-color: var(--gold);
	}

	button {
		border: none;
		display: block;
		margin-top: 20px;
	}
</style>
