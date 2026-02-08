export default defineNuxtRouteMiddleware((to) => {
    const { userPhone } = usePhone()

    if(to.path==='/auth/otp-code' && (userPhone.value ==='' || userPhone.value === null)){
            return abortNavigation({
                statusCode:400,
                statusMessage:'شما قادر به مشاهده این صفحه نیستید!'
            })
    }
})