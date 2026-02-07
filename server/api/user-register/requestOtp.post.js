import { defineEventHandler, readBody } from "#imports"
// import { showError } from "nuxt/app";
const { public: { baseURL } } = useRuntimeConfig()
export default defineEventHandler(async (event) => {
    const { phone } = await readBody(event)

    console.log(phone, 'body from server');

    try {
        const res = await $fetch(`${baseURL}/account/auth`, {
            method: 'POST',
            body: {
                phone: phone
            }

        })
        console.log(res);
        if (res.status === 200 && res.status !== 'undefined') {
            return res
        }


    } catch (error) {
        return error
        // createError(error.message)
    }


})