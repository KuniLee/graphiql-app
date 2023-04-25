import { useAppSelector } from '@/hooks/redux'

export const useAuth = () => {
  const { isAuth } = useAppSelector((state) => state.auth)

  return { isAuth }
}
