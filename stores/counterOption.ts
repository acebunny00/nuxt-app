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
		// 자동으로 반환 유형을 숫자로 유추함.
		doubleCount: (state) => state.count * 2,
		// 반환 유형은 **반드시** 명시적으로 설정되어야 함.
		doublePlusOne(): number {
			// 전체 스토어에 대한 자동 완성 및 타이핑 ✨
			return this.doubleCount + 1;
		},
		quadrupleCounter(): number {
			return this.doubleCount * 2;
		},
		otherGetter(state) {
			const userList = useUserListStore();
			return state.count + userList.users[2].id;
		},
	},
	actions: {
		increment() {
			this.count++;
		},
	},
});
