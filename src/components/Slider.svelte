<script>
	// @ts-nocheck
	import { register } from 'swiper/element/bundle';
	import { onMount } from 'svelte';
	register();
	let { images } = $props();

	onMount(() => {
		const swiperEl = document.querySelector('swiper-container');
		Object.assign(swiperEl, {
			loop: true,
			slidesPerView: 1,
			spaceBetween: 20,
			speed: 4000,
			autoplay: {
				delay: 0,
				disableOnInteraction: true
			},
			navigation: {
				nextEl: '.left',
				prevEl: '.right'
			},
			breakpoints: {
				400: {
					slidesPerView: 1
				},
				768: {
					slidesPerView: 2
				},
				1024: {
					slidesPerView: 3
				}
			}
		});
		swiperEl.initialize();
	});
</script>

<div class="swiper imageSwiper">
	<div class="slider-cue left">
		<svg
			version="1.1"
			id="Layer_1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			x="0px"
			y="0px"
			viewBox="0 0 700 700"
			style="enable-background:new 0 0 700 700;"
			xml:space="preserve"
		>
			<g>
				<path
					d="M233.2,265.5c-1.9,1.9-3.4,4.2-4.4,6.7c-2.1,5-2.1,10.6,0,15.6c1,2.5,2.5,4.8,4.4,6.7l102.3,102.3c5.2,5,12.7,6.9,19.6,5
s12.4-7.4,14.3-14.3c1.9-7,0-14.4-5-19.6l-67.4-67.4h175.7c7.3,0,14.1-3.9,17.7-10.2c3.7-6.3,3.7-14.1,0-20.5
c-3.7-6.3-10.4-10.2-17.7-10.2H297.1l67.4-67.4h0c5-5.2,6.9-12.7,5-19.6c-1.9-7-7.4-12.4-14.3-14.3c-7-1.9-14.4,0-19.6,5
L233.2,265.5z"
				/>
				<path
					d="M162,92c-49.9,49.9-77.9,117.5-78,188l0,0c0,70.5,28,138.2,77.9,188.1C211.8,518,279.4,546,350,546s138.2-28,188.1-77.9
C588,418.2,616,350.5,616,280s-28-138.2-77.9-188.1C488.2,42,420.5,14,350,14C279.5,14.1,211.9,42.1,162,92L162,92z M509.1,120.9
c42.2,42.2,65.9,99.4,66,159.1l0,0c0,59.7-23.7,116.9-65.9,159.1c-42.2,42.2-99.5,65.9-159.1,65.9c-59.7,0-117-23.7-159.2-65.9
c-42.2-42.2-65.9-99.5-65.9-159.1c0-59.7,23.7-117,65.9-159.2C233,78.6,290.3,54.9,350,54.9C409.7,55,466.9,78.7,509.1,120.9
L509.1,120.9z"
				/>
			</g>
		</svg>
	</div>
	<div class="swiper-wrapper">
		<!-- loop over images -->
		{#if images.length != 0}
			<swiper-container init="false">
				{#each images as image}
					<swiper-slide>
						<img src={image.url} alt={image.alt} />
					</swiper-slide>
				{/each}
			</swiper-container>
		{/if}
	</div>
	<div class="slider-cue right">
		<svg
			version="1.1"
			id="Layer_1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			x="0px"
			y="0px"
			viewBox="0 0 700 700"
			style="enable-background:new 0 0 700 700;"
			xml:space="preserve"
		>
			<g>
				<path
					d="M466.8,294.5c1.9-1.9,3.4-4.2,4.4-6.7c2.1-5,2.1-10.6,0-15.6c-1-2.5-2.5-4.8-4.4-6.7L364.5,163.2c-5.2-5-12.7-6.9-19.6-5
s-12.4,7.4-14.3,14.3c-1.9,7,0,14.4,5,19.6l67.4,67.4H227.2c-7.3,0-14.1,3.9-17.7,10.2c-3.7,6.3-3.7,14.1,0,20.5
c3.7,6.3,10.4,10.2,17.7,10.2h175.7l-67.4,67.4h0c-5,5.2-6.9,12.7-5,19.6c1.9,7,7.4,12.4,14.3,14.3c7,1.9,14.4,0,19.6-5
L466.8,294.5z"
				/>
				<path
					d="M538,468c49.9-49.9,77.9-117.5,78-188l0,0c0-70.5-28-138.2-77.9-188.1C488.2,42,420.5,14,350,14S211.8,42,161.9,91.9
C112,141.8,84,209.5,84,280s28,138.2,77.9,188.1C211.8,518,279.4,546,350,546C420.5,545.9,488.1,517.9,538,468L538,468z
M190.9,439.1c-42.2-42.2-65.9-99.4-66-159.1l0,0c0-59.7,23.7-117,65.9-159.2c42.2-42.2,99.5-65.9,159.1-65.9
c59.7,0,117,23.7,159.1,65.9c42.2,42.2,65.9,99.5,65.9,159.2c0,59.7-23.7,117-65.9,159.1c-42.2,42.2-99.5,65.9-159.1,65.9
C290.3,505,233.1,481.3,190.9,439.1L190.9,439.1z"
				/>
			</g>
		</svg>
	</div>
</div>

<style>
	swiper-slide {
		height: 300px;
	}
	swiper-slide img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.slider-cue {
		position: absolute;
		width: 50px;
		height: auto;
		top: 50%;
		transform: translateY(-50%);
		z-index: 10;
	}
	.slider-cue svg path {
		fill: var(--orange);
		transition: all 300ms ease-in-out;
	}
	.slider-cue:hover svg path {
		fill: var(--white);
	}
	.left {
		left: 0;
	}
	.right {
		right: 0;
	}
</style>
