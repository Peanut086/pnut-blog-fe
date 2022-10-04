import {defineStore} from "pinia";
import {ILoginInterface, ILoginResponse} from "../../../interface/login.interface";
import pnutRequest from "../../../pnutAxios/index"
import localStorageUtil from "../../../utils/localStorageUtil";
import {IWindow} from "./type";
import {useUerInfoStore} from "../userInfo";

enum authApi {
  LOGIN = "/auth/login"
}

let currentWindow: IWindow = window;
const userInfoStore = useUerInfoStore();

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
        currentWindow.$message.success("登录成功")
        localStorageUtil.set("token", res.data.token)
        userInfoStore.setUserInfo(res.data.userInfo)
      } else {
        currentWindow.$message.error(res.message)
      }
    }
  }
})
