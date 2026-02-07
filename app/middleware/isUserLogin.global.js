export default defineNuxtRouteMiddleware((to) =>{
    const { authUser } = useAuth()
    if(authUser.value !== '' ){
        if(to.path ==='/auth/authentication' || to.path === '/auth/otp-code'){
            return navigateTo('/', {
                redirectCode:302
            })
        }
    }
})