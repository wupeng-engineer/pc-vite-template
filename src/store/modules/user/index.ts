import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: 'app-user',
  state: () => ({ token: '' }),
  getters: {
    getToken(state): string {
      return state.token;
    },
  },

  actions: {
    setToken(token: string) {
      this.token = token;
    },
  },
});
