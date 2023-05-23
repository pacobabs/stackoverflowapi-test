import { ActionTypes as _, State, Action } from '@store/types'

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case _.setUsers: {
      return { ...state, users: action.payload }
    }
    case _.setUserFollowed: {
      return {
        ...state,
        users: state.users?.map((user) =>
          user.user_id === action.payload.user_id ? { ...user, followed: action.payload.followed } : user
        )
      }
    }
    case _.setUserBlocked: {
      return {
        ...state,
        users: state.users?.map((user) =>
          user.user_id === action.payload.user_id ? { ...user, blocked: action.payload.blocked } : user
        )
      }
    }
    case _.setPage: {
      return { ...state, page: action.payload }
    }

    default:
      return state
  }
}

export default reducer
