import { defineEventHandler, readBody } from "#imports"
const { public: { baseURL } } = useRuntimeConfig()
export default defineEventHandler(async (event) => {
    const { phone, otp } = await readBody(event)

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
                sameSite: 'lax',
                maxAge:2.5*24*60*60,
            })
            setCookie(event, 'refresh-token', res.data?.refresh, {
                httpOnly: true,
                secure: true,
                path: '/',
                sameSite: 'lax',
                maxAge:7*24*60*60,
            })
            return {
                message: res.message,
                status: res.status,
            }
        }else if(res.status === 401){
            deleteCookie(event, 'access-token', {
                path:'/',
                secure:true,
                httpOnly:true,
            })
            return navigateTo('/auth/authentication')
        }


    } catch (error) {
        return error
    }


})