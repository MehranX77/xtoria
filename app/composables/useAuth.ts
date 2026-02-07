export const useAuth = () => {
    const authUser = useState<string | null>('authUser', () => null)
    return { authUser }
}