
export default defineEventHandler(async (event) =>{
              deleteCookie(event, 'access-token', {
                path:'/',
                secure:true,
                httpOnly:true,
            })
                deleteCookie(event, 'refresh-token', {
                path:'/',
                secure:true,
                httpOnly:true,
            })
            
}) 