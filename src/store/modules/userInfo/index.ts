import {defineStore} from "pinia";
import LocalStorageUtil from "../../../utils/localStorageUtil";
import pnutRequest from "../../../pnutAxios/index";

export const useLoginStore = defineStore("userInfo", {
  state: () => ({
    userInfo: {},
  }),
  getters: {
    getUserInfo(state) {
      return state.userInfo
    }
  },
  actions: {
    setUserInfo(userInfo: any) {
      this.userInfo = userInfo
    },
    setToken(token: string) {
      LocalStorageUtil.set("token", token)
    },
    async requestUserInfo() {
      // TODO
    }
  }
})
