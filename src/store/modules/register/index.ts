import {defineStore} from "pinia";
import pnutRequest from "../../../pnutAxios/index"
import {IUser} from "../../../interface/user.interface";

export const useRegisterStore = defineStore('register', {
  state: () => {
    return {}
  },
  getters: {},
  actions: {
    async register(user: IUser) {
      const res = await pnutRequest.POST<IUser>({
        url: '/user/create',
        data: user
      })
      if (res.status === 201) {
        window.$message.success(res.message)
      } else {
        window.$message.error(res.message)
      }
    }
  }
})
