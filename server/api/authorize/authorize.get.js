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
        console.log(res, 'authorize resualt server');

        if (res.status === 200) {
            return res
        } else if (res.status === 401 || res.status === 400) {

            return navigateTo('/auth/authentication')
        }
    } catch (error) {
        console.log(error);

    }
})