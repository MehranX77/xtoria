export default defineNuxtPlugin(async () => {
    const { me } = useMyInfo()
    try {
        const res = await $fetch('/api/authorize/me')
        me.value = res

    } catch (error) {
        return error
    }
})