<script>
	// @ts-nocheck
	let { userProfile } = $props();
	let { firstName, email, profilePhoto } = userProfile;
</script>

<section>
	<nav>
		<div>
			{#if profilePhoto}
				<div class="photo">
					<img src={profilePhoto} alt="Profile Photo" />
				</div>
			{/if}
			<h4>Welcome, {firstName ? firstName : email}!</h4>
		</div>
		<div>
			<a href="/">Home</a>
			<a href="/dashboard">Dashboard</a>
			<a href="/profile">Manage Profile</a>
			<a
				href="/logout"
				onclick={(e) =>
					!confirm('Are you really sure you want to leave this digital paradise?') &&
					e.preventDefault()}>Logout</a
			>
		</div>
	</nav>
</section>

<style>
	section {
		background: black;
		position: relative;
		z-index: 19;
		padding: 8px 20px;
		align-items: center;
	}
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	nav > div {
		display: flex;
		gap: 10px;
		align-items: center;
	}
	.photo img {
		width: 30px;
		height: 30px;
		object-fit: cover;
		object-position: center;
		border-radius: 50%;
	}
	nav > div h4 {
		color: var(--white);
		margin: 0;
		line-height: 1;
		font-size: 1.6rem;
	}

	nav > div a {
		color: var(--gold);
		text-transform: uppercase;
		margin: 0 10px;
		font-weight: bold;
		font-size: 1.2rem;
	}
	nav > div a:hover {
		color: var(--orange);
	}
</style>
