import {defineStore} from "pinia";
import {ILoginInterface, ILoginResponse} from "../../../pages/login/login.interface";
import pnutRequest from "../../../pnutAxios/index"
import localStorageUtil from "../../../utils/localStorageUtil";

enum authApi {
  LOGIN = "/auth/login"
}

export const useLoginStore = defineStore("login", {
  state: () => {
    return {}
  },
  getters: {},
  actions: {
    async login(loginInfo: ILoginInterface) {
      const res = await pnutRequest.POST<ILoginResponse>({
        url: authApi.LOGIN,
        data: loginInfo
      })
      if (res.status === 201) {
        window.$message.success("登录成功")
        localStorageUtil.set("token", res.data.token)
      } else {
        window.$message.error(res.message)
      }
    }
  }
})
