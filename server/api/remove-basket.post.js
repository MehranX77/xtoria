export default defineEventHandler(async (event) => {
    const { public: { baseURL } } = useRuntimeConfig()
    const token = getCookie(event, 'access-token')
    const { pId } = await readBody(event)

    try {
        const res = await $fetch(`${baseURL}/remove-basket/${pId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return res
    } catch (error) {
        return error.data
    }

})