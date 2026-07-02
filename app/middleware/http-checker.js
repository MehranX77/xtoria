export default defineNuxtRouteMiddleware((to) =>{
    if(import.meta.client){
        const hostName = window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost'
        if((window.location.protocol === 'http:' || hostName) && to.path =='/auth/authentication'){
            throw showError({
                statusCode:404,
                statusMessage:'سایت در حال بروزرسانی است...'
            })
        }
    }
})