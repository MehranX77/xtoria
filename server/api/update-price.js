export default defineEventHandler(async (event) => {
    const {public: {baseURL}} = useRuntimeConfig()
    const token = getCookie(event, 'access-token')
    const {totalPrice,colorId, guaranteeId, productId, optionName } = await readBody(event) 
     console.log(optionName);
     
    try {
        const res = $fetch(`${baseURL}/product/update-price/${productId}/${optionName[0] || 0 +'-'+optionName[1] || 0}?color_id=${colorId}&guarantee_id=${guaranteeId}`, {
            headers:{
                'Authorization' : `Bearer ${token}`
            }
        })
        return res
    } catch (error) {
        return error.data
        
    }
})