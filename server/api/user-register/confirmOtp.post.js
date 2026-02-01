import { defineEventHandler, readBody } from "#imports"
const { public: { baseURL } } = useRuntimeConfig()
export default defineEventHandler(async (event) => {
    const { phone, otp } = await readBody(event)

    console.log(phone, otp, 'body from server');
    try {
        const res = await $fetch(`${baseURL}/account/verify`, {
            method: 'POST',
            body: {
                phone: phone,
                otp: otp
            },
            headers: {
                'Accept': 'application/json'
            }

        })
        console.log(res, 'res from otp server');
        if (res.status === 200) {
            setCookie(event, 'access-token', res.data?.access, {
                httpOnly: true,
                secure: true,
                path: '/',
                sameSite: 'lax'
            })
            setCookie(event, 'refresh-token', res.data?.refresh, {
                httpOnly: true,
                secure: true,
                path: '/',
                sameSite: 'lax'
            })
            return {
                message: res.message,
                status: res.status
            }
        }


    } catch (error) {
        console.log(error);
    }


})