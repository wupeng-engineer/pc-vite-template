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
    /**
     *  获取用户信息
     * @returns
     */
    getUserInfo(): Promise<string> {
      return new Promise((resolve, reject) => {
        if (this.token) {
          resolve(this.token);
          return;
        }

        setTimeout(() => {
          this.token = '123';
          resolve(this.token);
        }, 1000);
      });
    },

    /**
     * 登录
     */
    login() {},

    /**
     * 登出
     * @param goLogin
     */
    logout(goLogin = false) {
      // goLogin && router.push(PageEnum.BASE_LOGIN);
    },
  },
});
