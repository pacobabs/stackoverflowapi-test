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
    if (!user) return
    !user.followed && !user.blocked && setExpanded((expanded) => !expanded)
  }

  const onSetFollowed = () => {
    if (!user) return
    dispatch(setUserFollowed(user.user_id, true))
    dispatch(setUserBlocked(user.user_id, false))
    setExpanded(false)
  }

  const onSetBlocked = () => {
    if (!user) return
    dispatch(setUserBlocked(user.user_id, true))
    dispatch(setUserFollowed(user.user_id, false))
    setExpanded(false)
  }

  const onReset = () => {
    if (!user) return
    dispatch(setUserFollowed(user?.user_id, false))
    dispatch(setUserBlocked(user?.user_id, false))
    setExpanded(false)
  }

  return (
    <div className="relative flex flex-col pb-6 overflow-hidden">
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
          <div className="w-32 h-8 px-2 md:w-24">
            {' '}
            {user ? (
              <h2>
                reputation <span className="text-indigo-300 font-inter">{user.reputation}</span>
              </h2>
            ) : (
              <Skeleton />
            )}
          </div>
        </div>
        {user?.followed ? (
          <div className="flex flex-col gap-12 ml-auto">
            <div className="absolute top-0 w-16 h-16 right-4">
              <div className="absolute transform rotate-45 bg-blue-300 text-center text-white font-semibold py-1 left-[-50px] top-[16px] lg:top-[24px] w-[170px]">
                Followed
              </div>
            </div>
            <button
              className="px-4 py-1 mt-24 text-gray-900 bg-gray-300 rounded-md hover:bg-gray-200"
              onClick={onReset}
            >
              Unfollow
            </button>
          </div>
        ) : null}
        {user?.blocked ? (
          <button className="px-4 py-1 ml-auto text-white bg-blue-600 rounded-md hover:bg-blue-500" onClick={onReset}>
            Undo
          </button>
        ) : null}
      </div>
      <div className="h-6">
        {expanded ? (
          <div className="flex items-center justify-center gap-4 p-2 bg-blue-100">
            <button className="px-4 py-1 text-white bg-blue-600 rounded-md hover:bg-blue-500" onClick={onSetFollowed}>
              Follow
            </button>
            <button className="px-4 py-1 text-gray-900 bg-gray-300 rounded-md hover:bg-gray-200" onClick={onSetBlocked}>
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
