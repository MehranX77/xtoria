import { defineStore } from "pinia";
export const addToBasket = defineStore('add-to-basket', {
  state: () => ({
    basketCart: []
  }),
  getters: {
    showProduct(state) {
      return state.basketCart
    }
  },
  actions: {
    async addToBasket(basket) {
      this.basketCart.push(basket)
      try {
        const res = await $fetch('/api/checkout-list',{
          method:'POST',
          body:{
            basketId: basket?.productId,
            basketqty:basket?.qty
          }
        })
        console.log(res);

      } catch (error) {
        return error.data
      }
    }
  }
})