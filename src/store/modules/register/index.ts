import {defineStore} from "pinia";
import pnutRequest from "../../../pnutAxios/index"
import {IUser} from "../../../interface/user.interface";
import {IWindow} from "../login/type";

export const useRegisterStore = defineStore('register', {
  state: () => {
    return {}
  },
  getters: {},
  actions: {
    async register(user: IUser) {
      let currentWindow: IWindow = window;
      const res = await pnutRequest.POST<IUser>({
        url: '/user/create',
        data: user
      })
      if (res.status === 201) {
        console.log('Pnut ========> ', currentWindow);
      }
    }
  }
})
