import React from 'react'
import UserView from '@components/App/UserView'
import { User } from '@services/types'

const UsersList = ({ users }: Props) => {
  return (
    <>
      <div className="h-8 text-center font-inter">{'List of Stackoverflow users by reputation'}</div>
      {users.map((user) => (
        <UserView key={user.user_id} user={user} />
      ))}
    </>
  )
}

type Props = {
  users: User[]
}

export default UsersList
