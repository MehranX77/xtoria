export const useMyInfo = () => {
    const me = useState<object | null>('user_phone', () => null)
    return { me }
}
