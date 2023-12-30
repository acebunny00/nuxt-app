<script setup lang="ts">
	const route = useRoute();
</script>

<template>
	<div>
		<h1>Nuxt Routing set up successfully!</h1>
		<p>Current route: {{ route.path }}</p>
		<a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
	</div>
	<hr />
	<h1 class="animate__animated animate__bounce">An animated element</h1>

	<VueUse />
	<CounterOption />
	<CounterSetup />
</template>
