// https://nuxt.com/docs/guide/concepts/auto-imports
// import { defineStore } from "pinia";

// https://pinia.vuejs.kr/core-concepts/#option-stores
export const useCounterOptionStore = defineStore("counterOption", {
	//			setup VS option
	// ref()			=	state
	// computed()	=	getters
	// function()	=	actions
	state: () => ({ count: 100, name: "Eduardo" }),
	getters: {
		doubleCount: (state) => state.count * 2,
	},
	actions: {
		increment() {
			this.count++;
		},
	},
});
