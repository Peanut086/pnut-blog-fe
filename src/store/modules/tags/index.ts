import {defineStore} from "pinia";
import pnutRequest from "../../../pnutAxios/index"
import {ITag} from "../../../interface/tag.interface";


export const useTagsStore = defineStore('tag', {
  state: () => {
    return {
      tags: [] as ITag[],
    }
  },
  getters: {
    getAllTags(): ITag[] {
      return this.tags
    }
  },
  actions: {
    async queryAllTags() {
      const res = await pnutRequest.GET<ITag[]>({
        url: '/tag',
      })
      if (res.data) {
        this.tags = res.data
      }
    }
  }
})
