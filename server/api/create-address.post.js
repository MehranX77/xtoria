export default defineEventHandler(async (event) => {
    const { public: { baseURL } } = useRuntimeConfig()
    const token = getCookie(event, 'access-token')
    const { fullname, province, city, lineAddress, postalCode } = await readBody(event)

    console.log(fullname);


    try {
        const res = await $fetch(`${baseURL}/account/address`, {
            method:'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: {
                fullname,
                province,
                city,
                postal_code: postalCode,
                address_line:lineAddress
            }
        })

        return res
    } catch (error) {
            return error
    }
})