export const useSettingsStore = defineStore("settings", {
	state: () => ({
		preferences: null,
		// ...
	}),
	actions: {
		async fetchUserPreferences() {
			const auth = useAuthStore();
			if (auth.isAuthenticated) {
				this.preferences = await fetchPreferences();
			} else {
				throw new Error("인증이 필요합니다!");
			}
		},
	},
});
