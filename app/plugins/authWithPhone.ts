export default defineNuxtPlugin(async () => {
    const { authUser } = useAuth()
    try {
        const token = useRequestHeaders(['cookie'])
        const res = await $fetch('/api/authorize/authorize',{
            headers: token
        })
        authUser.value = res?.data?.phone
        
    } catch (error) {
         console.log(error);
         
    }
})