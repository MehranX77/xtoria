import { defineEventHandler, getCookie } from "#imports"
const { public: { baseURL } } = useRuntimeConfig()
export default defineEventHandler(async (event) => {
    const token = getCookie(event, 'access-token')
    try {
        const res = await $fetch(`${baseURL}/account/phone`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return res
    } catch (error) {
        console.log(error);

    }
})