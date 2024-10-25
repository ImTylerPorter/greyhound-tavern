<script>
	import Header from './Header.svelte';
	import Hero from './Hero.svelte';
	import Menu from './Menu.svelte';
	export let data;
</script>

<Header />
<Hero />
<Menu {data} />
