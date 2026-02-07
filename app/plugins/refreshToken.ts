export default defineNuxtPlugin({

  name:'refresh-token',
  dependsOn:['auth-with-phone'],
  order:1,
    async setup () {

        try {
            const token = useRequestHeaders(['cookie'])

            if (!token.cookie) {
               const res=   await $fetch('/api/authorize/getNewToken', {
                    method: 'GET',
                    headers: token as Record<string, string>
                })

                
            }

        } catch (error) {
            console.log(error, 'refresh token error plugin');

        }
    },

})
