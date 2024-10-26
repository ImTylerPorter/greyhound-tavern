<script>
	import AngleBackground from '../components/AngleBackground.svelte';
	import ContactForm from '../components/ContactForm.svelte';
	import SectionTitle from '../components/SectionTitle.svelte';
	import Slider from '../components/Slider.svelte';
	let { images } = $props();
</script>

<section>
	<div id="theSlider">
		<SectionTitle title="Just Some Pics" />
		<div class="content">
			<Slider {images} />
		</div>
		<div class="bg">
			<img src="/images/bg.png" alt="Decorative background" />
		</div>
		<div class="contact">
			<SectionTitle title="Contact Us" color="white" />
			<div class="theForm">
				<ContactForm />
			</div>
		</div>
	</div>
</section>

<style>
	section {
		background-image: url('/images/about-bg.jpg');
		background-size: cover;
		background-position: center;
		padding: 400px 0 100px;
		position: relative;
		z-index: 9;
	}
	.content {
		position: relative;
		z-index: 10;
		width: 900px;
		max-width: 90%;
		margin: 0 auto;
	}
	#theSlider {
		position: relative;
		padding-top: 80px;
	}
	.bg {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		overflow: visible;
		z-index: -1;
	}
	.bg img {
		min-height: 600px;
		width: 100%;
		object-fit: cover;
		object-position: top;
	}

	.contact {
		margin: 200px auto 0;
		position: relative;
		z-index: 12;
	}
	.theForm {
		width: 400px;
		max-width: 90%;
		margin: 0 auto;
	}
</style>
