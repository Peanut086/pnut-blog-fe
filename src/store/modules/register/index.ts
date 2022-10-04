import {defineStore} from "pinia";
import pnutRequest from "../../../pnutAxios/index"
import {IUser} from "../../../interface/user.interface";
import router from "../../../router/index"

export const useRegisterStore = defineStore('register', {
  state: () => {
    return {}
  },
  getters: {},
  actions: {
    async register(user: IUser) {
      const currentWindow = window as any;
      const res = await pnutRequest.POST<IUser>({
        url: '/user/create',
        data: user
      })
      if (res.status === 201) {
        currentWindow.$message.success(res.message)

        await router.push('/login')
      } else {
        currentWindow.$message.error(res.message)
      }
    }
  }
})
