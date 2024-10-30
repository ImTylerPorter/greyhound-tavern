<script>
	import { enhance } from '$app/forms';
	import { invalidate } from '$app/navigation';
	import AdminBar from '../AdminBar.svelte';

	const { data } = $props();
	const { userProfile } = data;

	let firstName = $state('');
	let lastName = $state('');
	let email = $state('');
	let profilePhoto = $state('');
	let previewSrc = $state('');
	let formError = $state('');

	$effect(() => {
		if (userProfile) {
			firstName = userProfile.firstName;
			lastName = userProfile.lastName;
			email = userProfile.email;
			// @ts-ignore
			profilePhoto = userProfile.profilePhoto;
		}
	});

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		profilePhoto = file;
		previewSrc = file ? URL.createObjectURL(file) : '';
	};

	function clearError() {
		formError = '';
	}
</script>

<AdminBar {userProfile} />
<main>
	<div class="container">
		<div class="card">
			<header>
				<h1>Profile</h1>
			</header>
			<form
				method="post"
				class="form"
				enctype="multipart/form-data"
				use:enhance={({ formData }) => {
					formData.set('firstName', firstName);
					formData.set('lastName', lastName);
					formData.set('email', email);
					formData.set('profilePhoto', profilePhoto);
					return ({ result }) => {
						if (result.type === 'success') {
							invalidate('/');
							alert('UPDATED!');
						} else {
							console.log(result.error.message);
						}
					};
				}}
			>
				<label>
					<span>Profile Photo</span>
					{#if previewSrc}
						<div class="preview">
							<img src={previewSrc} alt="Profile Photo" />
						</div>
					{:else if profilePhoto}
						<div class="preview">
							<img src={profilePhoto} alt="Profile Photo" />
						</div>
					{/if}
					<input type="file" accept="image/*" onchange={handleFileChange} />
				</label>
				<label>
					<span>Email</span>
					<input required type="email" name="email" bind:value={email} oninput={clearError} />
				</label>

				<label>
					<span>First Name</span>
					<input type="text" name="firstName" bind:value={firstName} oninput={clearError} />
				</label>

				<label>
					<span>Last Name</span>
					<input type="text" name="lastName" bind:value={lastName} oninput={clearError} />
				</label>
				<button type="submit">Submit</button>
			</form>
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
	h1 {
		color: var(--white);
		letter-spacing: 2px;
		font-size: 2.4rem;
		text-transform: uppercase;
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
		padding: 10px;
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
		width: 100%;
		height: auto;
		margin-top: 20px;
	}

	.preview img {
		width: 100px;
		height: 100px;
		border-radius: 50%;
	}

	button {
		border: none;
		display: block;
		margin: 20px auto;
	}
</style>
