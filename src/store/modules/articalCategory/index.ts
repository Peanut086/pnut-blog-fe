import {defineStore} from "pinia";
import pnutRequest from "../../../pnutAxios/index"
import {IArticalCategory} from "../../../interface/articalCategory.interface";

export const useArticalCategoryStore = defineStore('articalCategory', {
  state: () => {
    return {
      category: Array<IArticalCategory>
    }
  },
  getters: {},
  actions: {
    async getArticalCategoryByType(type: string) {
      const res = await pnutRequest.GET<Array<IArticalCategory>>({
        url: `art-category/type/${type}`,
      })
      console.log('Pnut ========> ', res.data)
    }
  }
})
