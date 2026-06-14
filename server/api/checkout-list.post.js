import { getCookie, readBody, defineEventHandler } from "#imports"
export default defineEventHandler(async (event) => {
    const { public: { baseURL } } = useRuntimeConfig()
    const token = getCookie(event, 'access-token')
    const { basketId, basketqty } = await readBody(event)

    try {
        const res = await $fetch(`${baseURL}/add-to-basket/${basketId}/${basketqty}`,{
            method:'GET',
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
        console.log(res);
        
        return res
    } catch (error) {
        return error.data
    }
})