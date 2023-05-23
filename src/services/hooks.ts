import { getUsers } from '@services'
import { useEffect, useState } from 'react'
import { useDispatch } from '@store'
import { setUsers } from '@store/actions'

export const useFetchUsers = (page: number) => {
  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false)
  const [hasMore, setHasmore] = useState(false)

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getUsers(page)
      response && dispatch(setUsers(response.items))
      response && setHasmore(response.has_more)
      setLoaded(true)
    }
    fetchUsers()
  }, [page])

  return { loaded, hasMore }
}
