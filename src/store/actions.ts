import { Action, ActionTypes as _, State } from '@store/types'

export const setUsers = (users: State['users']): Action => ({
  type: _.setUsers,
  payload: users
})

export const setUserFollowed = (user_id: number, followed: boolean): Action => ({
  type: _.setUserFollowed,
  payload: { user_id, followed }
})

export const setUserBlocked = (user_id: number, blocked: boolean): Action => ({
  type: _.setUserBlocked,
  payload: { user_id, blocked }
})

export const setPage = (page: State['page']): Action => ({
  type: _.setPage,
  payload: page
})
