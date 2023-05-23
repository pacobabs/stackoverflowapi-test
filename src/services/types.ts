export type User = {
  user_id: number
  reputation: number
  profile_image: string
  display_name: string
  followed?: boolean
  blocked?: boolean
}

export type ApiResponse = {
  has_more: boolean
  items: User[]
}
