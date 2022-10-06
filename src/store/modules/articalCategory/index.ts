import {defineStore} from "pinia";
import pnutRequest from "../../../pnutAxios/index"
import {IArticalCategory} from "../../../interface/articalCategory.interface";
import {lint2tree} from "../../../utils/lint2tree";

export const useArticalCategoryStore = defineStore('articalCategory', {
  state: () => {
    return {
      categoryTec: [] as Array<IArticalCategory>,
      currentMenuId: null as string | null,
    }
  },
  getters: {
    getCategoryTec(): Array<IArticalCategory> {
      this.categoryTec.map(item => {
        if (item.children) {
          item.children.map(sub => {
            sub.label = sub.name
            sub.key = sub.id
          })
        }
        item.key = item.id
        item.label = item.name
      })
      return this.categoryTec
    },
    getCurrentMenuId(): string | null {
      return this.currentMenuId
    }
  },
  actions: {
    async getArticalCategoryByType(type: string) {
      const res = await pnutRequest.GET<Array<IArticalCategory>>({
        url: `art-category/type/${type}`,
      })
      if (res.status === 200) {
        this.categoryTec = lint2tree(res.data, 'id', 'pid', 'children')
      }
    },
    setCurrentMenuId(id: string) {
      this.currentMenuId = id
    }
  }
})
