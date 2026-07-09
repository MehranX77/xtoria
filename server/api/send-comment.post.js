export default defineEventHandler(async(event) => {
    const { public: { baseURL } } = useRuntimeConfig()
    const {comment, rating, varient} = await readBody(event)
    const token = getCookie(event, 'access-token')

    try {
        const res = await $fetch(`${baseURL}/product/create-comment`, {
            method:'POST',
            headers:{
                'Authorization': `Bearer ${token}`
            },
            body:{
                comment,
                rating,
                varient
            }
        })

        return res
    } catch (error) {
        return error.data
    }
})