import { mande } from "mande";

const api = mande("/api/users");

export const useUsers = defineStore("users", {
	state: () => ({
		userData: null,
		// ...
	}),

	actions: {
		async registerUser(login, password) {
			try {
				this.userData = await api.post({ login, password });
				showTooltip(`다시 오신 것을 환영합니다, ${this.userData.name}!`);
			} catch (error) {
				showTooltip(error);
				// 폼(form) 컴포넌트가 오류를 표시하도록 함.
				return error;
			}
		},
	},
});
