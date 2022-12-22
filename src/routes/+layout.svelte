<script>
	import "./styles.css";
	import Header from "$lib/components/Header.svelte";
	import { onMount } from "svelte"
	import auth from "../authService.js"
	import {isAuthenticated, user} from "../store"

	let auth0Client

	onMount(async () => {
		auth0Client = await auth.createClient()
		isAuthenticated.set(await auth0Client.isAuthenticated())
		user.set(await auth0Client.getUser())
	})

	function login() {
		auth.loginWithPopup(auth0Client)
	}

	function logout() {
		auth.logout(auth0Client)
	}
</script>


<svelte:head>
	<title>AquaStats</title>
</svelte:head>

<div class="app">
	
	<Header />
		
	<nav>
		<a href="/">Home</a>
		<a href="/about">About</a>
		{#if $isAuthenticated}
		<a href="/dataEntry">Enter Data</a>
		<a href="/#" on:click="{logout}">Logout</a>
		{:else}
		<a href="/#" on:click="{login}">Login</a>
		{/if}
	</nav>

	<slot>
	</slot>
	
	<footer>Footer Goes Here</footer>
	
</div>