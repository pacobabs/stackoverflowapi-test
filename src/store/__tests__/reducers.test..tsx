import reducer from '@store/reducers'
import { ActionTypes } from '@store/types'
import usersMock from '../../../usersMock'

describe('Reducers', () => {
  it('should return initial state', async () => {
    //@ts-ignore
    expect(reducer({ users: usersMock }, { type: 'unknown' })).toEqual({
      users: usersMock
    })
  })
  it('should setUsers', async () => {
    //@ts-ignore
    expect(reducer({ users: usersMock }, { payload: usersMock, type: ActionTypes.setUsers })).toEqual({
      users: usersMock
    })
  })
  it('should setUserFollowed', async () => {
    //@ts-ignore
    expect(
      reducer(
        { users: usersMock, page: 1 },
        { payload: { user_id: 22656, followed: true }, type: ActionTypes.setUserFollowed }
      )
    ).toEqual({
      users: usersMock.map((user) => (user.user_id === 22656 ? { ...user, user_id: 22656, followed: true } : user)),
      page: 1
    })
  })
  it('should setUserBlocked', async () => {
    //@ts-ignore
    expect(
      reducer(
        { users: usersMock, page: 1 },
        { payload: { user_id: 22656, blocked: true }, type: ActionTypes.setUserBlocked }
      )
    ).toEqual({
      users: usersMock.map((user) => (user.user_id === 22656 ? { ...user, user_id: 22656, blocked: true } : user)),
      page: 1
    })
  })
  it('should setPage', async () => {
    //@ts-ignore
    expect(reducer({ page: 1 }, { payload: 2, type: ActionTypes.setPage })).toEqual({
      page: 2
    })
  })
})
