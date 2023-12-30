<template>
	<h2>VueUse</h2>
	<div>pos: {{ x }}, {{ y }}</div>
	<div>isDark: {{ isDark }}</div>
	<div>store: {{ store }}</div>
</template>

<script lang="ts" setup>
	// tracks mouse position
	const { x, y } = useMouse();

	// is user prefers dark theme
	const isDark = usePreferredDark();

	// persist state in localStorage
	const store = useLocalStorage("my-storage", {
		name: "Apple",
		color: "red",
	});
</script>

<style></style>
