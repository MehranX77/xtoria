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
        this.basketCart.push(res?.data)
      } catch (error) {
        return error.data
      }
    },
    basketListHandler(p){
      // console.log('len:', p.length == false);
      
      console.log('basket list array:', this.basketCart);
      if(p.length){
        this.basketCart = []
        this.basketCart.push(...p)
        console.log('product list from pinia', p);
       }
    }
  }
})