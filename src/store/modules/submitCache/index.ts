import {defineStore} from "pinia";

export const useSubmitStore = defineStore('submit', {
  state: () => {
    return {
      tags: '',
      category: '',
    }
  },
  actions: {
    setTags(tags: string) {
      this.tags = tags
    },
    clearTags() {
      this.tags = ''
    },
    setCategory(category: string) {
      this.category = category
    },
    clearCategory() {
      this.category = ''
    }
  },
  getters: {
    getTags(): string {
      return this.tags
    },
    getCategory(): string {
      return this.category
    }
  }
})
