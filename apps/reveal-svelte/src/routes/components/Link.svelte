<script lang="ts">
	import { page } from '$app/state';
	import type { Snippet } from 'svelte';
	import { announce } from './Announcer.svelte';

	let { href, children }: { href: string; children: Snippet } = $props();

	const isActive = new URL(href, 'http://a').pathname === page.url.pathname;

	function handleClick(ev: Event) {
		const target = ev.currentTarget as HTMLAnchorElement;

		if (target.href === location.href) {
			return;
		}

		ev.preventDefault();
		announce(target.href);
	}
</script>

<a data-active={isActive} {href} onclick={handleClick}>
	{@render children()}
</a>

<style>
	a {
		font-size: 16px;
		font-weight: bold;
		text-decoration: none;
		color: white;
		transition: 250ms ease-in-out;
		position: relative;
	}

	a:hover {
		transform: scale(1.2);
		color: yellow;
	}

	a[data-active='true'] {
		color: yellow;
	}

	a:after {
		content: '';
		position: absolute;
		bottom: -1px;
		left: 0;
		width: 0%;
		height: 2px;
		background-color: yellow;
		transition: 250ms ease-in-out;
	}

	a:hover:after {
		width: 100%;
	}
</style>
