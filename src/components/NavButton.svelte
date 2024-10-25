<!-- @migration-task Error while migrating Svelte code: Cannot use `export let` in runes mode — use `$props()` instead -->
<script>
	export let onToggle = () => {};
	export let open;
</script>

<button onclick={onToggle} class:open>
	<span></span>
	<span></span>
	<span></span>
</button>

<style>
	button {
		display: none;
		width: 30px;
		height: 30px;
		position: relative;
		margin-top: 15px;
		transform: rotate(0deg);
		transition: 0.5s ease-in-out;
		background: transparent;
		border: none;
		padding: 0;
	}
	span {
		display: block;
		position: absolute;
		height: 4px;
		width: 100%;
		background: var(--white);
		border-radius: 9px;
		opacity: 1;
		left: 0;
		transform: rotate(0deg);
		transition: 0.25s ease-in-out;
	}
	span:nth-child(1) {
		top: 0px;
	}
	span:nth-child(2) {
		top: 12px;
	}
	span:nth-child(3) {
		top: 24px;
	}
	button.open span:nth-child(1) {
		top: 12px;
		transform: rotate(135deg);
	}
	button.open span:nth-child(2) {
		opacity: 0;
		left: -60px;
	}
	button.open span:nth-child(3) {
		top: 12px;
		transform: rotate(-135deg);
	}

	@media (max-width: 1101px) {
		button {
			display: block;
			cursor: pointer;
		}
	}
</style>
