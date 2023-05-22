import { useSelector } from 'react-reduce-hooks'
import { State } from './types'

export const useUsers = () => {
  const users: State['users'] = useSelector((state: State) => state.users)
  return { users }
}
