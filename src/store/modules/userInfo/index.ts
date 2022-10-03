import {defineStore} from 'pinia'
import {IUser} from "../../../interface/user.interface";
import router from "../../../router/index";

export const useUerInfoStore = defineStore("user", {
  state: () => {
    return {
      userInfo: {} as IUser
    }
  },
  getters: {},
  actions: {
    setUserInfo(userInfo: IUser) {
      this.userInfo = userInfo
      if (userInfo.id) {
        // 此处实现路由跳转
        router.push("/list")
      }
    }
  }
})
