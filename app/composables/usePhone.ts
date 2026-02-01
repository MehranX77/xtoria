export const usePhone = () => {
    const userPhone = useState('user_phone', () => '')
    return { userPhone }
}

