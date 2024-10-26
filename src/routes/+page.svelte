<script>
	import Arcades from './Arcades.svelte';
	import Events from './Events.svelte';
	import Footer from './Footer.svelte';
	import FooterMenu from './FooterMenu.svelte';
	import Header from './Header.svelte';
	import Hero from './Hero.svelte';
	import Menu from './Menu.svelte';
	import SliderContact from './SliderContact.svelte';
	export let data;
	let title = 'Greyhound Tavern - Arcade Bar - Albany, Oregon';
	let description =
		'Located in the heart of Downtown Albany, Greyhound Tavern offers fun for the whole family. Come enjoy wood-fired pizza, arcades, and live music!';
	let previewImageUrl = '/images/preview.jpg';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="twitter:image" content={previewImageUrl} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="og:image" content={previewImageUrl} />
	<meta property="og:site_name" content={title} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content="greyhoundtavern.live" />
</svelte:head>

<Header />
<Hero />
<Menu {data} />
<Events events={data?.events} />
<Arcades />
<SliderContact images={data?.images} />
<FooterMenu />
<Footer />
