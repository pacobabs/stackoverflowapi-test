import React from 'react'
import UserView from '@components/App/UserView'
import Pagination from '@components/App/Pagination'
import { User } from '@services/types'

const UsersList = ({ users, hasMore }: Props) => (
  <>
    <Pagination hasMore={hasMore} />
    {users.map((user) => (
      <UserView key={user.user_id} user={user} />
    ))}
    <Pagination hasMore={hasMore} />
  </>
)

type Props = {
  users: User[]
  hasMore: boolean
}

export default UsersList
