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
    async addToBasket( basket, cxt, cp) {
      try {
       console.log('pinia: ', basket, cxt, cp);
       
        const res = await $fetch('/api/checkout-list', {
          method: 'POST',
          body: {
            basketId: basket?.productId,
            basketqty: basket?.quantity,
            guanrantyId: basket?.guanrantyId,
            productColor: cxt
          }
        })
       
       
        this.basketCart.push({
          discount: res.data.discount,
          id: res.data.id,
          pId:res.data.product.id,
          price: res.data?.price + cp,
          name: res.data.product?.name,
          picture: res.data.product?.picture,
          brand: res.data.brand?.name,
          isFamous: res.data.brand?.is_famous,
          description: res.data.product?.description,
          score: res.data.product?.score,
          specialDiscount: res.data?.special_discount,
          quantity:res.data.quantity
        })
      } catch (error) {
        return error.data
      }
    },
    basketListHandler(p) {
      console.log('p: ', p);
      
      if (p.length) {
        this.basketCart = []
        for (let item = 0; item <= p.length; item++) {
          this.basketCart.push({
            discount: p[item].discount,
            id: p[item].product.id,
            name: p[item].product.product.name,
            price: p[item].product.price ,
            picture: p[item].product.product.picture,
            brand: p[item].product.product.brand,
            description: p[item].product.product.description,
            score: p[item].product.product.score,
            quantity:p[item].quantity
          })
        }
      }
    }
  }
})