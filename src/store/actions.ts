import { Action, ActionTypes as _, State } from '@store/types'

export const setUsers = (users: State['users']): Action => ({
  type: _.setUsers,
  payload: users
})
