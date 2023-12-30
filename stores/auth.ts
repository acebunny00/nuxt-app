export const useAuthStore = defineStore("auth", {
	state: () => ({
		isAuthenticated: null,
		// ...
	}),
	actions: {
		async fetchPreferences() {},
	},
});
