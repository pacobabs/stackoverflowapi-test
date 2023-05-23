import { setPage, setUserBlocked, setUserFollowed, setUsers } from '@store/actions'
import { ActionTypes } from '@store/types'
import usersMock from '../../../usersMock'

describe('Actions', () => {
  it('should setUsers', async () => {
    expect(setUsers(usersMock)).toEqual({ payload: usersMock, type: ActionTypes.setUsers })
  })
  it('should setUserFollowed', async () => {
    expect(setUserFollowed(23445, true)).toEqual({
      payload: { user_id: 23445, followed: true },
      type: ActionTypes.setUserFollowed
    })
  })
  it('should setUserBlocked', async () => {
    expect(setUserBlocked(23445, true)).toEqual({
      payload: { user_id: 23445, blocked: true },
      type: ActionTypes.setUserBlocked
    })
  })
  it('should setPage', async () => {
    expect(setPage(2)).toEqual({ payload: 2, type: ActionTypes.setPage })
  })
})
