import React from 'react'
import { usePage, useUsers } from '@store/selectors'
import { useFetchUsers } from '@services/hooks'
import UsersSkeleton from '@components/App/UsersSkeleton'
import UsersList from '@components/App/UsersList'

const App = () => {
  const { users } = useUsers()
  const { page } = usePage()
  const { loaded, hasMore } = useFetchUsers(page)

  return (
    <main className="flex items-center justify-center w-full min-h-screen overflow-hidden bg-gray-100">
      <div className="relative flex flex-col w-full max-w-4xl gap-8 p-8 overflow-x-hidden overflow-y-auto">
        {loaded && users ? <UsersList users={users} hasMore={hasMore} /> : <UsersSkeleton loaded={loaded} />}
      </div>
    </main>
  )
}

export default App
