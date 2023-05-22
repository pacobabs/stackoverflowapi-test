import React from 'react'
import UserView from '@components/App/UserView'

const UsersSkeleton = ({ loaded }: Props) => {
  return (
    <>
      <div className="text-center font-inter h-8">
        {!loaded
          ? 'Loading... Please wait while we fetch the items'
          : 'Sorry! we vould not fetch the items. Please try again'}
      </div>
      {Array(20)
        .fill('')
        .map((_, index) => (
          <UserView key={index} />
        ))}
    </>
  )
}

type Props = {
  loaded: boolean
}

export default UsersSkeleton
