export default defineNuxtRouteMiddleware((to) => {
const { authUser } = useAuth()
  if(to.path === '/user' && authUser.value === ''){
    return navigateTo('/auth/authentication', {
        redirectCode:401
    })
  }
})