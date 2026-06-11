const { public: { baseURL } } = useRuntimeConfig()
export default defineEventHandler(async (event) => {
    const token = getCookie(event, 'refresh-token')

    try {
        const res = await $fetch(`${baseURL}/token/refresh/`, {
            method: 'GET',
            headers: token
        })

        if (res !== undefined && res.status === 200) {
            setCookie(event, 'access-token', res.data?.access, {
                httpOnly: true,
                secure: true,
                sameSite:'lax',
                path: '/',
            })
            setCookie(event, 'refresh-token', res.data?.refresh, {
                httpOnly: true,
                secure: true,
                sameSite:'lax',
                path: '/',
            })
        }

    } catch (error) {
        console.log(error);
    }

})