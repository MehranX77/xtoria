import { defineStore } from "pinia";

export const addToBasket = defineStore('add-to-basket', {
    state: () => ({
       basketCart:[{
         id:1,
         productName: 'mobile',
         price:2_500_000
       }]
    }),
    getters:{
      showProduct(state){
        return state.basketCart
      }
    },
    actions:{

    }
})