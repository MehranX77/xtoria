import { defineEventHandler, readBody } from "#imports"
const { public: { baseURL } } = useRuntimeConfig()
export default defineEventHandler(async (event) => {
    const { phone, otp } = await readBody(event)

    const token = getCookie(event, 'access-token')
    try {
        const res = await $fetch(`${baseURL}/account/verify`, {
            method: 'POST',
            body: {
                phone: phone,
                otp: otp
            },
            headers: {
                'Content-Type': 'application/json'
            }

        })

        if (res.status === 200) {
            setCookie(event, 'access-token', res.data?.access, {
                httpOnly: true,
                secure: true,
                path: '/',
                sameSite:'lax',
                maxAge: 2.5 * 24 * 60 * 60,
            })
            setCookie(event, 'refresh-token', res.data?.refresh, {
                httpOnly: true,
                secure: true,
                path: '/',
                sameSite:'lax',
                maxAge: 7 * 24 * 60 * 60,
            })
            return {
                message: res.message,
                status: res.status,
            }
        } else if (res.status === 401 || res.status === 400) {

            if (token) {
                deleteCookie(event, 'access-token', {
                    path: '/',
                    secure: true,
                    sameSite:'lax',
                    httpOnly: true,
                })
                deleteCookie(event, 'refresh-token', {
                    path: '/',
                    secure: true,
                    sameSite:'lax',
                    httpOnly: true,
                })
            }
            return {
                message: res.message,
                status: res.status,
            }
        }


    } catch (error) {
        return error
    }


})