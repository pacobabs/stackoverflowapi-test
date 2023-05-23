import React from 'react'
import UserView from '@components/App/UserView'
import { useDispatch } from 'react-reduce-hooks'
import { setPage } from '@store/actions'
import { usePage } from '@store/selectors'

const UsersSkeleton = ({ loaded }: Props) => {
  const dispatch = useDispatch()
  const { page } = usePage()

  // switch the page to trigger a refetch
  const onTryAgain = () => dispatch(setPage(page === 1 ? page + 1 : 1))

  return (
    <>
      <div className="h-16 text-center lg:h-12 font-inter">
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
}

export default UsersSkeleton
