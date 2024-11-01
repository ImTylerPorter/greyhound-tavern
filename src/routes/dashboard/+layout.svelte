<script>
	import AdminBar from '../AdminBar.svelte';

	let { data, children } = $props();
	let { userProfile } = data;
</script>

<AdminBar {userProfile} />

{@render children()}
