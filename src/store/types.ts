/* istanbul ignore file */
import { User } from '@services/types'

export type State = {
  users: User[] | undefined
  page: number
}

// actions
export enum ActionTypes {
  setUsers = 'users/set',
  setUserFollowed = 'users/followed',
  setUserBlocked = 'users/blocked',
  setPage = 'page/set'
}

export type ActionCreators = {
  setUsers: (users: State['users']) => Action
  setUserFollowed: (user_id: number, followed: boolean) => Action
  setUserBlocked: (user_id: number, blocked: boolean) => Action
  setPage: (page: State['page']) => Action
}

type UsersPayload = {
  [ActionTypes.setUsers]: State['users']
  [ActionTypes.setUserFollowed]: { user_id: number; followed: boolean }
  [ActionTypes.setUserBlocked]: { user_id: number; blocked: boolean }
}

type PagePayload = {
  [ActionTypes.setPage]: State['page']
}

export type Action = ActionType<UsersPayload & PagePayload>

// Utulity types

type ActionType<Payload extends { [index: string]: any }> = Map<Payload>[keyof Map<Payload>]

type Map<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key
      }
    : {
        type: Key
        payload: M[Key]
      }
}
