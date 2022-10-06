import {defineStore} from 'pinia'
import pnutRequest from "../../../pnutAxios/index"
import {IArticalInterface} from "../../../interface/artical.interface";

export const useArticalStore = defineStore('artical', {
  state: () => {
    return {
      articalList: [] as IArticalInterface[],
    }
  },
  getters: {
    getArticalList: (state) => {
      return state.articalList
    }
  },
  actions: {
    async getArticalListByType(type: string) {
      const res = await pnutRequest.GET<Array<IArticalInterface>>({
        url: `/article/type/${type}`
      })
      this.articalList = res.data
    }
  }
})
