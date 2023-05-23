import React from 'react'
import { usePage, useUsers } from '@store/selectors'
import { useFetchUsers } from '@services/hooks'
import UsersSkeleton from '@components/App/UsersSkeleton'
import UsersList from '@components/App/UsersList'
import { PAGE_SIZE } from '@services'

const App = () => {
  const { users } = useUsers()
  const { page } = usePage()
  const { loaded, hasMore, setLoaded } = useFetchUsers(page)

  // slice the users list to show visible users for the current page
  const startSlice = (page - 1) * PAGE_SIZE
  const endSlice = startSlice + PAGE_SIZE

  const viewUsers = users?.slice(startSlice, endSlice)

  return (
    <main className="flex justify-center w-full min-h-screen overflow-hidden bg-gray-100">
      <div className="relative flex flex-col w-full max-w-4xl gap-6 p-8 overflow-x-hidden overflow-y-auto">
        {loaded && viewUsers?.length ? (
          <UsersList users={viewUsers} hasMore={hasMore} setLoaded={setLoaded} />
        ) : (
          <UsersSkeleton loaded={loaded} />
        )}
      </div>
    </main>
  )
}

export default App
