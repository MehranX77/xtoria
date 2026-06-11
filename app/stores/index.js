import { defineStore } from "pinia";

export const addToBasket = defineStore('add-to-basket', {
    state: () => ({
       basketCart:[]
    }),
    getters:{
      showProduct(state){
        return state.basketCart
      }
    },
    actions:{
       addToBasket(basket){
         this.basketCart.push(basket)
       }
    }
})