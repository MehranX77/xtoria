export default defineEventHandler(async (event) => {
    const { public: { baseURL } } = useRuntimeConfig()
    const token = getCookie(event, 'access-token')
    // const {fullname, nationalCode, postalCode, email, birthDate} = await readBody(event)
    const body = await readMultipartFormData(event)
    try {
        const formDataToSend = new FormData()

        let userObject = {}
        let pictureFile = null

        for (const field of body) {
            if (field.name === 'user') {
                userObject = JSON.parse(field.data.toString('utf-8'))
            }

            else if (field.name === 'picture' && field.filename) {
                pictureFile = field
            }

        }

        formDataToSend.append('first_name', userObject.first_name || '')
        formDataToSend.append('last_name', userObject.last_name || '')
        formDataToSend.append('email', userObject.email || '')
        formDataToSend.append('national_code', String(userObject.nationalCode) || '')

        if (userObject.birthDate) {
            formDataToSend.append('birth_date', String(userObject.birthDate))
        }

        if (pictureFile) {
            const blob = new Blob([pictureFile.data], { type: pictureFile.type })
            formDataToSend.append('picture', blob, pictureFile.filename)
        }

        const res = await $fetch(`${baseURL}/account/profile`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            body: formDataToSend
        })
        return res
    } catch (error) {
        console.log(error.data);
        
        return error.data
    }

})