import { useAppSelector } from '@/hooks/redux'

export const useAuth = () => {
  const isAuth = useAppSelector((state) => state.auth.user !== null)

  return { isAuth }
}
