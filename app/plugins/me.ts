export default defineNuxtPlugin(async () => {
    const { me } = useMyInfo()
    try {
        const res = await $fetch('/api/authorize/me')
        console.log('res from me: ', res);
        
        me.value = res.data

    } catch (error) {
        return error
    }
})