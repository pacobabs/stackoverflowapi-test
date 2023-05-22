import React from 'react'
import Skeleton from '@components/App/Skeleton'
import { User } from '@services/types'
import Image from 'next/image'

const UserView = ({ user }: Props) => {
  return (
    <div className="flex items-center gap-4 px-2 py-4 bg-white">
      <div className="w-32 h-32">
        {user ? (
          <Image
            className="object-contain w-full h-full"
            src={user.profile_image}
            alt="profile image"
            width={32}
            height={32}
          />
        ) : (
          <Skeleton />
        )}
      </div>
      <div className="flex flex-col gap-8">
        <div className="w-56 h-8 px-2 md:w-80">
          {' '}
          {user ? <h1 className="text-xl font-bold">{user.display_name}</h1> : <Skeleton />}
        </div>
        <div className="w-32 h-8 px-2 md:w-24"> {user ? `reputation ${user.reputation}` : <Skeleton />}</div>
      </div>
    </div>
  )
}

type Props = {
  user?: User
}

export default UserView
