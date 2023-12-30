<template>
	<h2>VueUse</h2>
	<div>isDark: {{ isDark }}</div>
	<div>store: {{ store }}</div>

	<div ref="el">Click Outside of Me</div>
	<UseMouse v-slot="{ x, y }"> x: {{ x }} y: {{ y }} </UseMouse>
	<UseDark v-slot="{ isDark, toggleDark }">
		<button @click="toggleDark()">Is Dark: {{ isDark }}</button>
	</UseDark>
</template>

<script lang="ts" setup>
	import { OnClickOutside, UseMouse, UseDark } from "@vueuse/components";
	// is user prefers dark theme
	const isDark = usePreferredDark();

	// persist state in localStorage
	const store = useLocalStorage("my-storage", {
		name: "Apple",
		color: "red",
	});

	const el = ref();
	function close() {
		alert();
	}

	onClickOutside(el, close);
</script>

<style></style>
