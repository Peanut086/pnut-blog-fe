import {defineStore} from "pinia";

export const useSpinControl = defineStore('useSpinControl', {
  state: () => {
    return {
      show: false
    }
  },
  getters: {},
  actions: {
    setState(show: boolean) {
      this.show = show
    }
  }
})
