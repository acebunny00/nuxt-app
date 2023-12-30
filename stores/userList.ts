// https://nuxt.com/docs/guide/concepts/auto-imports
// import { defineStore } from "pinia";

// https://pinia.vuejs.kr/core-concepts/#option-stores
export const useUserListStore = defineStore("userList", {
	//			setup VS option
	// ref()			=	state
	// computed()	=	getters
	// function()	=	actions

	// state: (): State => {
	// 	return {
	// 		users: [
	// 			{ name: "1", age: 11, id: 1, active: false },
	// 			{ name: "2", age: 12, id: 2, active: true },
	// 		],
	// 		user: null,
	// 	};
	// },

	// 화살표 함수는 전체 유형 유추을 위해 권장됨.
	state: () => {
		return {
			// 이 모든 속성은 자동으로 유형이 유추됨.
			users: [
				{ name: "1", age: 11, id: 1, active: false },
				{ name: "2", age: 12, id: 2, active: true },
			],
			user: null,
			count: 0,
			name: "Eduardo",
			isAdmin: true,
			items: [],
			hasChanged: true,
		};
	},

	getters: {
		getUserById: (state) => {
			return (userId: number) => state.users.find((user) => user.id === userId);
		},
		getActiveUserById(state) {
			const activeUsers = state.users.filter((user) => user.active);
			return (userId: number) => activeUsers.find((user) => user.id === userId);
		},
	},
});

// interface Users {
// 	name: string;
// 	age: number;
// 	id: number;
// 	active: boolean;
// }
// interface State {
// 	users: Users[];
// 	user: Users | null;
// }
