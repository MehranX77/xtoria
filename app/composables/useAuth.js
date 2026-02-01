export const useAuth = () => {
    const authUser = useState('authUser', () => '')
    return { authUser }
}