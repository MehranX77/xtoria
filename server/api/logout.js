export default defineEventHandler(async(event) => {
    const {public:{baseURL}} = useRuntimeConfig()
    const accessToken = getCookie(event, 'access-token')
    const refreshToken = getCookie(event, 'refresh-token')
    try {
        const res = await $fetch(`${baseURL}/account/logout`,{
          method:'POST',
          headers:{
            'Authorization': `Bearer ${accessToken}`
          },
          body:{
            refresh: refreshToken
          }
        })
        if(res.status === 200){
            deleteCookie(event, 'access-token', {
                path:'/'
            })
            deleteCookie(event, 'refresh-token', {
                path:'/'
            })
        }

        return res?.message
    } catch (error) {
        return error.data
    }
})