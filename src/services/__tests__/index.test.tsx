import { getUsers } from '@services'
import usersMock from '../../../usersMock'

const API_URL = process.env.NEXT_PUBLIC_API_URL

const payload = {
  method: 'GET'
}

describe('Services', () => {
  it('should getUsers', async () => {
    const users = await getUsers(1)
    expect(fetch).toHaveBeenLastCalledWith(
      `${API_URL}/users?page=1&pagesize=20&order=desc&sort=reputation&site=stackoverflow`,
      payload
    )
    expect(users).toEqual({ has_more: true, items: usersMock })
  })
})
