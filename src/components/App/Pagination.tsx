import React, { Dispatch, SetStateAction } from 'react'
import { useDispatch } from 'react-reduce-hooks'
import { setPage } from '@store/actions'
import { usePage, useUsers } from '@store/selectors'
import { PAGE_SIZE } from '@services'

const Pagination = ({ hasMore, setLoaded }: Props) => {
  const dispatch = useDispatch()
  const { page } = usePage()
  const { users } = useUsers()

  const onPreviousPage = () => {
    const previousPage = Math.max(1, page - 1)
    dispatch(setPage(previousPage))
    window.scrollTo({ top: 0 })
  }

  const onNextPage = () => {
    const nextPage = page + 1
    // check if the page is already fetched
    const isPageNotFetched = !users || nextPage * PAGE_SIZE > users.length
    isPageNotFetched && setLoaded(false)
    dispatch(setPage(nextPage))
    window.scrollTo({ top: 0 })
  }

  return (
    <div className="flex h-16 lg:h-12 font-inter">
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
  setLoaded: Dispatch<SetStateAction<boolean>>
}

export default Pagination
