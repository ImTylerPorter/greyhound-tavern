<script>
	import Arcades from './Arcades.svelte';
	import Events from './Events.svelte';
	import Header from './Header.svelte';
	import Hero from './Hero.svelte';
	import Menu from './Menu.svelte';
	import SliderContact from './SliderContact.svelte';
	export let data;
</script>

<Header />
<Hero />
<Menu {data} />
<Events events={data?.events} />
<Arcades />
<SliderContact images={data?.images} />
