export default defineNuxtPlugin({

    name: 'auth-with-phone',
    order: 0,

    async setup() {
        const { authUser } = useAuth()
        try {
            const token = useRequestHeaders(['cookie'])
            const res = await $fetch('/api/authorize/authorize', {
                headers: token as Record<string, string>
            })
            if (res.status === 200 && res !== undefined) {
                authUser.value = res.data.phone
            } else if (res.status === 401 || res === undefined) {
                authUser.value = null
            }

        } catch (error) {
             const token = useRequestHeaders(['cookie'])
             await $fetch('/api/distroy/distroyCookie', {
                headers: token as Record<string, string>
            })

        }
    }

})