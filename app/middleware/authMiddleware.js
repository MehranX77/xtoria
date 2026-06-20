export default defineNuxtRouteMiddleware((to) => {
const { authUser } = useAuth()
  if((to.path === '/user' || to.path === '/checkout/cart' ) && (authUser.value === '' || authUser.value === null)){
    return navigateTo('/auth/authentication', {
        redirectCode:401
    })
  }
})