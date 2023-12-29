<template>
	<nav>
		<li>
			<NuxtLink to="/">Home</NuxtLink>
		</li>
		<li v-show="true">
			<NuxtLink to="/index_dev">Home dev</NuxtLink>
		</li>
	</nav>
	<slot />
</template>

<script lang="ts" setup></script>

<style>
	li {
		display: inline;
		margin-right: 20px;
	}
</style>
