/* istanbul ignore file */
import { User } from '@services/types'

export type State = {
  users: User[] | undefined
}

// actions
export enum ActionTypes {
  setUsers = 'users/set'
}

export type ActionCreators = {
  setUsers: (users: State['users']) => Action
}

type UsersPayload = {
  [ActionTypes.setUsers]: State['users']
}

export type Action = ActionType<UsersPayload>

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
