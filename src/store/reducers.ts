import { ActionTypes as _, State, Action } from '@store/types'

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case _.setUsers: {
      return { ...state, users: action.payload }
    }

    default:
      return state
  }
}

export default reducer
