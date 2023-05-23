import React, { useState } from 'react'
import Skeleton from '@components/App/Skeleton'
import { User } from '@services/types'
import Image from 'next/image'
import { setUserBlocked, setUserFollowed } from '@store/actions'
import { useDispatch } from 'react-reduce-hooks'

const UserView = ({ user }: Props) => {
  const dispatch = useDispatch()
  const [expanded, setExpanded] = useState(false)

  const onExpanded = () => {
    user && !user.followed && !user.blocked && setExpanded((expanded) => !expanded)
  }

  const onSetFollowed = () => {
    user && dispatch(setUserFollowed(user?.user_id, true))
    user && dispatch(setUserBlocked(user?.user_id, false))
    user && setExpanded(false)
  }

  const onSetBlocked = () => {
    user && dispatch(setUserBlocked(user?.user_id, true))
    user && dispatch(setUserFollowed(user?.user_id, false))
    user && setExpanded(false)
  }

  const onReset = () => {
    user && dispatch(setUserFollowed(user?.user_id, false))
    user && dispatch(setUserBlocked(user?.user_id, false))
    user && setExpanded(false)
  }

  return (
    <div className="flex flex-col">
      <div
        className={`flex items-center gap-4 px-2 py-4 ${user?.blocked ? 'bg-gray-300' : 'bg-white'}`}
        onClick={onExpanded}
      >
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
        {user?.followed ? (
          <div className="flex flex-col gap-12">
            <span className="text-sm text-center bg-blue-300 text-gray-50 rounded-xl">Followed</span>
            <button className="px-4 py-1 text-gray-900 bg-gray-300 rounded-sm" onClick={onReset}>
              Unfollow
            </button>
          </div>
        ) : null}
        {user?.blocked ? (
          <button className="px-4 py-1 text-white bg-blue-600 rounded-sm" onClick={onReset}>
            Undo
          </button>
        ) : null}
      </div>
      <div className="h-6">
        {expanded ? (
          <div className="flex items-center justify-center gap-4 p-2">
            <button className="px-4 py-1 text-white bg-blue-600 rounded-sm" onClick={onSetFollowed}>
              Follow
            </button>
            <button className="px-4 py-1 text-gray-900 bg-gray-300 rounded-sm" onClick={onSetBlocked}>
              Unfollow
            </button>
          </div>
        ) : null}
      </div>
    </div>
  )
}

type Props = {
  user?: User
}

export default UserView
