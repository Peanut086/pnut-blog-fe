import {defineStore} from 'pinia'
import pnutRequest from "../../../pnutAxios/index"
import {IArticalInterface} from "../../../interface/artical.interface";

export const useArticalStore = defineStore('artical', {
  state: () => {
    return {
      articalList: [] as IArticalInterface[],
      currentArtical: {} as IArticalInterface,
    }
  },
  getters: {
    getArticalList: (state) => {
      return state.articalList
    },
    getCurrentArtical: (state) => {
      return state.currentArtical
    }
  },
  actions: {
    async getArticalListByType(type: string) {
      const res = await pnutRequest.GET<Array<IArticalInterface>>({
        url: `/article/type/${type}`
      })
      this.articalList = res.data
    },

    async getArticalDetail(id: string) {
      const res = await pnutRequest.GET<IArticalInterface>({
        url: `/article/detail/${id}`
      })
      this.currentArtical.content = res.data.content
    },

    setCurrentArtical(artical: IArticalInterface) {
      this.currentArtical = artical
    },
    /*新增文章*/
    async createArtical(artical: IArticalInterface) {
      const res = await pnutRequest.POST<IArticalInterface>({
        url: '/article/create',
        data: artical
      })
      return res.data
    }
  }
})
