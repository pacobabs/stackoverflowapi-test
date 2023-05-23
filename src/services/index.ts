import { ApiResponse } from './types'

const API_URL = process.env.NEXT_PUBLIC_API_URL

export const PAGE_SIZE = 20

export async function getUsers(page: number): Promise<ApiResponse | undefined> {
  const options = {
    method: 'GET'
  }
  try {
    const req = await fetch(
      `${API_URL}/users?page=${page}&pagesize=${PAGE_SIZE}&order=desc&sort=reputation&site=stackoverflow`,
      options
    )
    const response: ApiResponse = await req.json()
    return response
  } catch {}
}
