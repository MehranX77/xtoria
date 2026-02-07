const { public: { baseURL } } = useRuntimeConfig()
export default defineEventHandler(async (event) => {
    const token = getCookie(event, 'access-token')

    try {
        const res = await $fetch(`${baseURL}/token/refresh/`, {
            method: 'GET',
            headers: token
        })
        console.log(res, 'new token server');

        if (res !== undefined && res.status === 200) {
            setCookie(event, 'access-token', res.data?.access, {
                httpOnly: true,
                secure: true,
                path: '/',
                sameSite: 'lax',
                maxAge: 2.5 * 24 * 60 * 60,
            })
        }

    } catch (error) {
        console.log(error);
    }

})