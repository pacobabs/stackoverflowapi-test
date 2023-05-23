import React from 'react'
import UserView from '@components/App/UserView'
import { User } from '@services/types'
import { useDispatch } from 'react-reduce-hooks'
import { setPage } from '@store/actions'
import { usePage } from '@store/selectors'

const UsersList = ({ users, hasMore }: Props) => {
  const dispatch = useDispatch()
  const { page } = usePage()

  const onPrevious = () => dispatch(setPage(Math.max(1, page - 1)))

  const onNext = () => dispatch(setPage(page + 1))

  return (
    <>
      <div className="flex h-8 font-inter">
        <button
          className="px-4 bg-blue-300 disabled:bg-gray-400 text-gray-50"
          disabled={page === 1}
          onClick={onPrevious}
        >
          Prev
        </button>
        <div className="w-full text-center">
          List of Stackoverflow users by reputation
          <br />
          Page {page}
        </div>
        <button
          className="px-4 ml-auto bg-blue-300 disabled:bg-gray-400 text-gray-50"
          disabled={!hasMore}
          onClick={onNext}
        >
          Next
        </button>
      </div>
      {users.map((user) => (
        <UserView key={user.user_id} user={user} />
      ))}
    </>
  )
}

type Props = {
  users: User[]
  hasMore: boolean
}

export default UsersList
