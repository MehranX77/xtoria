import {addToBasket} from '../stores/index'
export default defineNuxtPlugin(async (nuxtApp) =>{
    const store = addToBasket()
    try {
        const res = await $fetch('/api/basket-list',{
            method:'GET',
            headers: useRequestHeaders(['cookie'])
        })
         
        store.basketListHandler(res.data.results)

        console.log('log res basket data from plugin:', res.data.results);
    } catch (error) {
        console.log(error);
    }
})