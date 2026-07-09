import {addToBasket} from '../stores/index'
export default defineNuxtPlugin(async (nuxtApp) =>{
    const store = addToBasket()
    try {
        const res = await $fetch('/api/basket-list',{
            method:'GET',
            headers: useRequestHeaders(['cookie'])
        })

        console.log('res from basket list plugin:', res);
        
        store.basketListHandler(res.data.results)
    } catch (error) {
        console.log(error);
    }
})