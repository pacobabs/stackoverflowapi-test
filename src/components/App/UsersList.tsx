import React, { Dispatch, SetStateAction } from 'react'
import UserView from '@components/App/UserView'
import Pagination from '@components/App/Pagination'
import { User } from '@services/types'

const UsersList = ({ users, hasMore, setLoaded }: Props) => (
  <>
    <Pagination hasMore={hasMore} setLoaded={setLoaded} />
    {users.map((user) => (
      <UserView key={user.user_id} user={user} />
    ))}
    <Pagination hasMore={hasMore} setLoaded={setLoaded} />
  </>
)

type Props = {
  users: User[]
  hasMore: boolean
  setLoaded: Dispatch<SetStateAction<boolean>>
}

export default UsersList
