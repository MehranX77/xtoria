export default defineEventHandler(async (event) => {

    const { public: { baseURL } } = useRuntimeConfig()
    const token = getCookie(event, 'access-token')
    console.log('tooooooooken: ', token);

    try {
        const res =await $fetch(`${baseURL}/account/address`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        console.log(res);

        return res


    } catch (error) {
        console.log(error);

    }
})