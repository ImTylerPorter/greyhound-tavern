<script>
	import { page } from '$app/stores';
	import { supabase } from '$lib/supabase';
	import { onMount } from 'svelte';
	import Logo from '../../components/Logo.svelte';
	import { session } from '$lib/session'; // import the session store

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

	const handleFileChange = (event) => {
		formState.profilePhoto = event.target.files[0];

		if (formState.profilePhoto) {
			const reader = new FileReader();
			reader.onload = (e) => {
				formState.previewSrc = e.target.result; // Set the preview source to the file data URL
			};
			reader.readAsDataURL(formState.profilePhoto); // Convert file to data URL
		} else {
			formState.previewSrc = ''; // Clear preview if no file is selected
		}
	};

	const login = async () => {
		let { email, password } = formState;
		const { data, error } = await supabase.auth.signInWithPassword({ email, password });
		if (error) formState.error = error.message;
		// @ts-ignore
		session.set(data.session); // Set session in Svelte store
	};

	const signUp = async () => {
		let { email, password, confirmPassword, profilePhoto, passphrase, error } = formState;
		if (email == '') {
			formState.error = 'Please enter an email.';
			return;
		}

		if (password == '') {
			formState.error = 'Please enter a password.';
			return;
		}

		if (passphrase == '') {
			formState.error = 'Please enter the passphrase provided by Greyhound Team.';
			return;
		}

		if (password != confirmPassword) {
			formState.error = 'Passwords do not match!';
			return;
		}
		try {
			const response = await fetch($page.url.pathname, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					email,
					password,
					confirmPassword,
					profilePhoto,
					passphrase
				})
			});

			const result = await response.json();

			if (!response.ok) {
				formState.error = result.error || 'Signup failed.';
			} else {
				formState.error = result.message;
			}
		} catch (err) {
			error = 'An error occurred during signup.';
		}
	};

	onMount(() => {
		let { session } = formState;
		supabase.auth.getSession().then(({ data }) => {
			session = data.session;
		});
	});
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
			{#if formState.isLogin}
				<div class="form">
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
					<button type="submit" onclick={login}>Login</button>
				</div>
			{:else}
				<div class="form">
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
						<input required type="password" name="password" bind:value={formState.password} />
					</label>
					<label>
						<span>Confirm Password Password</span>
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
							type="password"
							name="passphrase"
							bind:value={formState.passphrase}
							oninput={clearError}
						/>
					</label>
					<label>
						<span>Profile Photo</span>
						{#if formState.previewSrc}
							<div class="preview">
								<img src={formState.previewSrc} alt="Profile Photo" />
							</div>
						{/if}
						<input type="file" accept="image/*" onchange={handleFileChange} />
					</label>
					<button type="submit" onclick={signUp}>Signup</button>
				</div>
			{/if}
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

	input[type='file'] {
		border: none;
	}

	input[type='file']::-webkit-file-upload-button {
		background: var(--orange);
		padding: 10px 20px;
		border: 0;
		outline: 0;
		color: var(--white);
		margin-top: 20px;
		font-weight: bold;
		transition: all 300ms ease;
	}

	input[type='file']::-webkit-file-upload-button:hover {
		background: var(--gold);
	}

	.preview {
		width: 100px;
		height: auto;
		margin-top: 20px;
	}

	.preview img {
		width: 100%;
		border-radius: 50%;
	}

	button {
		border: none;
		display: block;
		margin-top: 20px;
	}
</style>
