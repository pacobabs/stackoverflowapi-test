import { PAGE_SIZE, getUsers } from '@services'
import { useEffect, useState } from 'react'
import { useDispatch } from '@store'
import { setUsers } from '@store/actions'
import { useUsers } from '@store/selectors'

export const useFetchUsers = (page: number) => {
  const dispatch = useDispatch()
  const { users } = useUsers()
  const [loaded, setLoaded] = useState(false)
  const [hasMore, setHasmore] = useState(false)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // check if the page is already fetched
        const isPageNotFetched = !users || page * PAGE_SIZE > users.length
        if (isPageNotFetched) {
          const response = await getUsers(page)
          // sends a request and append items to the users store
          response && dispatch(setUsers([...(users || []), ...response.items]))
          response && setHasmore(response.has_more)
        }
      } catch {}
      setLoaded(true)
    }
    fetchUsers()
  }, [page])

  return { loaded, hasMore, setLoaded }
}
