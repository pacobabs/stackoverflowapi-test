import React, { Dispatch, SetStateAction, useEffect } from 'react'
import UserView from '@components/App/UserView'

const UsersSkeleton = ({ loaded, setRetry }: Props) => {
  // retry the request if failed
  const onTryAgain = () => setRetry((retry) => !retry)

  useEffect(() => {
    // retry potential failed request when back online
    window.addEventListener('online', onTryAgain)

    return () => {
      window.removeEventListener('online', onTryAgain)
    }
  }, [])

  return (
    <>
      <div className="h-24 text-center md:h-16 lg:h-12 font-inter">
        {!loaded ? (
          'Loading... Please wait while we fetch the items'
        ) : (
          <div className="flex items-center justify-center gap-4">
            Sorry! we vould not fetch the items
            <button className="px-2 bg-blue-300 text-gray-50" onClick={onTryAgain}>
              {' '}
              Please try again
            </button>
          </div>
        )}
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
  setRetry: Dispatch<SetStateAction<boolean>>
}

export default UsersSkeleton
