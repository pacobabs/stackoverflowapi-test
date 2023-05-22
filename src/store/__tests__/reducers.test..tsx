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
})
