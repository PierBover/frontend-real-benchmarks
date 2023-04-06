<script>
	import {getNextStep} from './store.js';

	let items = getNextStep();

	function onClick () {}

	async function updateNext () {
		const nextStep = getNextStep();

		if (nextStep){
			items = nextStep;
			window.requestAnimationFrame(updateNext);
		}
	}

	window.requestAnimationFrame(updateNext);
</script>

{#each items as item (item.id)}
	{#if item.isButton}
		<button on:click={onClick}>{item.text}</button>
	{:else}
		<span>{item.text}</span>
	{/if}
{/each}