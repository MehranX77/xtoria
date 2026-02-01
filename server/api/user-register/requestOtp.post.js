import { defineEventHandler, readBody } from "#imports"
const { public: { baseURL } } = useRuntimeConfig()
export default defineEventHandler(async (event) => {
    const { phone } = await readBody(event)

    console.log(phone, 'body from server');

    try {
        const res = await $fetch(`${baseURL}/account/auth`, {
            method: 'POST',
            body:{
                phone: phone
            }

        })
        return res


    } catch (error) {
        console.log(error);
        
        // createError(error.message)
    }


})