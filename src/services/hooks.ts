import { getUsers } from '@services'
import { useEffect, useState } from 'react'
import { useDispatch } from '@store'
import { setUsers } from '@store/actions'

export const useFetchUsers = () => {
  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getUsers()
      response && dispatch(setUsers(response.items))
      setLoaded(true)
    }
    fetchUsers()
  }, [])

  return loaded
}
