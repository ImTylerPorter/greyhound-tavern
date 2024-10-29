<script>
	let { data } = $props();

	$inspect(data.userProfile);
</script>

<h1>Profile</h1>

{#if data.userProfile}
	<button>Logout</button>
{/if}
