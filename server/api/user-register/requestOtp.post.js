import { defineEventHandler, readBody } from "#imports"
// import { showError } from "nuxt/app";
const { public: { baseURL } } = useRuntimeConfig()

export default defineEventHandler(async (event) => {
    const { phone } = await readBody(event)

    try {
        const res = await $fetch(`${baseURL}/account/auth`, {
            method: 'POST',
            body: {
                phone: phone
            }

        })

        console.log(res, 'res request server');


        if (res.status === 200 && res.status !== undefined) {
            return res
        } else if (res.status === 401 || res.status === 400) {
            return {
                message: res.message,
                status: res.status,
            }
        }


    } catch (error) {
        return error
        // createError(error.message)
    }


})