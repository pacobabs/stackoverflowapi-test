import React from 'react'
import { useDispatch } from 'react-reduce-hooks'
import { setPage } from '@store/actions'
import { usePage } from '@store/selectors'

const Pagination = ({ hasMore }: Props) => {
  const dispatch = useDispatch()
  const { page } = usePage()

  const onPreviousPage = () => dispatch(setPage(Math.max(1, page - 1)))

  const onNextPage = () => dispatch(setPage(page + 1))

  return (
    <div className="flex h-16 lg:h-8 font-inter">
      <button
        className="px-4 bg-blue-300 disabled:bg-gray-400 text-gray-50"
        disabled={page === 1}
        onClick={onPreviousPage}
      >
        Prev
      </button>
      <div className="flex flex-col w-full gap-2 text-center">
        <p>List of Stackoverflow users by reputation</p>
        <span>Page {page}</span>
      </div>
      <button
        className="px-4 ml-auto bg-blue-300 disabled:bg-gray-400 text-gray-50"
        disabled={!hasMore}
        onClick={onNextPage}
      >
        Next
      </button>
    </div>
  )
}

type Props = {
  hasMore: boolean
}

export default Pagination
