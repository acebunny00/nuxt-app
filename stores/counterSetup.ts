// https://nuxt.com/docs/guide/concepts/auto-imports
// import { defineStore } from "pinia";

// https://pinia.vuejs.kr/core-concepts/#setup-stores
export const useCounterSetupStore = defineStore("counterSetup", () => {
	//			setup VS option
	// ref()			=	state
	// computed()	=	getters
	// function()	=	actions
	const count = ref(200);
	const name = ref("Eduardo");
	const doubleCount = computed(() => count.value * 2);

	function increment() {
		count.value++;
	}

	function $reset() {
		count.value = 0;
	}

	return { count, $reset, name, doubleCount, increment };
});

// https://nuxt.com/docs/guide/concepts/auto-imports
// import { inject } from "vue";
// import { useRoute } from "vue-router";

export const useSearchFilters = defineStore("search-filters", () => {
	const route = useRoute();
	// 이것은 `app.provide('appProvided', 'value')`가 호출되었다고 가정함
	const appProvided = inject("appProvided");

	// ...

	return {
		// ...
	};
});
