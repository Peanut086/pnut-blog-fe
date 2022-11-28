import { IUser } from './user.interface'

export interface IArticalInterface {
  id?: number
  create_time?: string
  update_time?: string
  title: string
  content: string
  status: string
  category: string
  cover?: string
  author: string
  user?: IUser
  tags: string
}
