export default defineNuxtRouteMiddleware((to) => {
const { authUser } = useAuth()
  if(to.path === '/user' && (authUser.value === '' || authUser.value === null)){
    return navigateTo('/auth/authentication', {
        redirectCode:401
    })
  }
})