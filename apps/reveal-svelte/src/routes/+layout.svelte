<script>
	import './app.css';
	import { base } from '$app/paths';
	import Announcer from './components/Announcer.svelte';
	import Link from './components/Link.svelte';
	let { children } = $props();
</script>


<svelte:head>
	<base href={base}/>
</svelte:head>

<nav>
	<Link href="/">Home</Link>
	<Link href="/a">Page A</Link>
	<Link href="/b">Page B</Link>
</nav>

<main>
	<Announcer />
	{@render children()}
</main>

<style>
	:root {
		--navbar-height: 4rem;
	}

	nav {
		min-height: var(--navbar-height);
		box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2);
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 20px;
		position: fixed;
		width: 100%;
		top: 0;
		background: rgb(10, 10, 10);
	}

	main {
		display: flex;
		flex-direction: column;
		padding-top: var(--navbar-height);
		justify-content: center;
		align-items: center;
		max-width: 1200px;
		margin: 0 auto;
		height: calc(100vh - var(--navbar-height));
	}
</style>
