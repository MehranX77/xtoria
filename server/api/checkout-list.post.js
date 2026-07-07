import { getCookie, readBody, defineEventHandler } from "#imports"
export default defineEventHandler(async (event) => {
    const { public: { baseURL } } = useRuntimeConfig()
    const token = getCookie(event, 'access-token')
    const { basketId, basketqty, guanrantyId, productColor } = await readBody(event)
     console.log(basketId,basketqty,guanrantyId,productColor);     
    try {
        const res = await $fetch(`${baseURL}/add-to-basket/${basketId}/${productColor}/${basketqty}/${guanrantyId || '1'}`,{
            method:'GET',
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
        console.log('basket res server joonz: ', res);
        
        return res
    } catch (error) {
        return error.data
    }
})