<script>
	import './styles.css';
	import Header from "$lib/components/Header.svelte";
</script>


<svelte:head>
	<title>AquaStats</title>
</svelte:head>

<div class="app">
	
	<Header />
		
	<nav>
		<a href="/">Home</a>
		<a href="/about">About</a>
		<a href="/dataEntry">Enter Data</a>
		<a href="/login">Login</a>
	</nav>

	<slot>
	</slot>
	
	<footer>Footer Goes Here</footer>
	
</div>