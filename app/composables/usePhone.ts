export const usePhone = () => {
    const userPhone = useState<string | null>('user_phone', () => null)
    return { userPhone }
}

