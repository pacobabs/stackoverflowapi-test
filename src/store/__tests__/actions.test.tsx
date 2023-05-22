import { setUsers } from '@store/actions'
import { ActionTypes } from '@store/types'
import usersMock from '../../../usersMock'

describe('Actions', () => {
  it('should setUsers', async () => {
    expect(setUsers(usersMock)).toEqual({ payload: usersMock, type: ActionTypes.setUsers })
  })
})
