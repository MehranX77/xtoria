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

        if (res.status === 200) {
            return res
        } else if (res.status === 401 || res.status === 400) {
            deleteCookie(event, 'access-token', {
                path: '/',
                secure: true,
                httpOnly: true,
            })
            deleteCookie(event, 'refresh-token', {
                path: '/',
                secure: true,
                httpOnly: true,
            })
        }
    } catch (error) {
        console.log(error);

    }
})