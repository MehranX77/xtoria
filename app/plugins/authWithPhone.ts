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
            console.log(res, 'from plugin');
            if (res.status === 200) {
                authUser.value = res.data.phone
            } else if(res.status === 401) {
                authUser.value = null 
                console.log(res, 'auth with phone resualt');

            }

        } catch (error) {
            console.log(error);

        }
    }

})