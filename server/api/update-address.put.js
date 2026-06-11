export default defineEventHandler(async (event) => {
    const { public: { baseURL } } = useRuntimeConfig()
    const { mainAddress, addressId } = await readBody(event)

    const token = getCookie(event, 'access-token')

    try {
        const res = await $fetch(`${baseURL}/account/address/${addressId}`, {
            method: 'PATCH',
            body: {
                'main_address': mainAddress
            },
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
        console.log(res);
        
        return res
    } catch (error) {
       return error?.data

    }

})