<script setup lang="ts">
	const route = useRoute();
	const title = ref("Nuxt app");
	const description = ref("My amazing site.");

	useSeoMeta({
		title,
		description,
		ogTitle: "[og:title]",
		ogDescription: "[og:description]",
		ogImage: "[og:image]",
		ogUrl: "[og:url]",
		twitterTitle: "[twitter:title]",
		twitterDescription: "[twitter:description]",
		twitterImage: "[twitter:image]",
		twitterCard: "summary",
	});

	useHead({
		meta: [{ charset: "utf-8" }],
		htmlAttrs: {
			lang: "ko",
		},
		link: [
			{
				rel: "icon",
				type: "image/x-icon",
				href: "/favicon.ico",
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com",
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
				crossorigin: "",
			},
			{
				rel: "stylesheet",
				href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
			},
		],
		bodyAttrs: {
			class: "test",
		},
	});
</script>

<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
