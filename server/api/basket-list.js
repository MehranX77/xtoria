export default defineEventHandler(async(event) => {
        const { public: { baseURL } } = useRuntimeConfig()
         const token = getCookie(event, 'access-token')
        try {
            const res = await $fetch(`${baseURL}/basket-list`, {
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            })

            return res
            
        } catch (error) {
            return error.data
        }
})