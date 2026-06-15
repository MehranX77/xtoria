export default defineEventHandler(async(event) => {
    const { public: { baseURL } } = useRuntimeConfig()
    const token = getCookie(event, 'access-token')
    // const {fullname, nationalCode, postalCode, email, birthDate} = await readBody(event)
    const {fullname, nationalCode, email, birthDate} = await readBody(event)
    console.log(birthDate.day+' '+birthDate.year);
    

    try {
        const res = await $fetch(`${baseURL}/account/profile`,{
            method:'PATCH',
            headers:{
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body:{
                first_name: fullname,
                last_name: fullname,
                email,
                birth_date:`${birthDate.year}`,
                national_code:nationalCode
            }
        })

        return res
    } catch (error) {
        return error.data
    }
    
})