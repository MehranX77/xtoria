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
      try {
        const res = await $fetch('/api/checkout-list', {
          method: 'POST',
          body: {
            basketId: basket?.productId,
            basketqty: basket?.qty
          }
        })
        console.log(res?.data);

        this.basketCart.push(res?.data)
      } catch (error) {
        return error.data
      }
    },

    async getBasketList() {
      try {
        const res = await $fetch('/api/basket-list', {
          method: 'GET',
          headers: useRequestHeaders(['cookie'])
        })
        this.basketCart.push(res?.data)
        console.log('result from pinia', res);

      } catch (error) {
        return error
      }
    }
  }
})