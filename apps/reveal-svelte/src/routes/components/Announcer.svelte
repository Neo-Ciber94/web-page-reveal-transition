<script module lang="ts">
	import { goto } from '$app/navigation';

	let announcerState = $state<'wait' | 'left' | 'right'>('left');
	let isLeft = $state(true);

	const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

	export async function announce(url: string) {
		announcerState = 'wait';
		await sleep(800);

		announcerState = isLeft ? 'right' : 'left';
		isLeft = !isLeft;

		await goto(url);
	}
</script>

<div id="navigation-announcer" data-nav-state={announcerState}></div>

<style>
	#navigation-announcer {
		position: fixed;
		width: 100%;
		height: 100%;
		background: black;
		top: 0;
		left: -100%;
		transform-origin: left;
		transition: 400ms ease-in-out;
		cursor: wait;
	}

	#navigation-announcer[data-nav-state='wait'] {
		left: 0%;
	}

	#navigation-announcer[data-nav-state='left'] {
		left: -100%;
	}

	#navigation-announcer[data-nav-state='right'] {
		left: 100%;
	}
</style>
