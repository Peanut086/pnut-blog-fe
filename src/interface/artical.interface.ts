import {IUser} from "./user.interface";
import {ITag} from "./tag.interface";

export interface IArticalInterface {
  id: number
  create_time: string
  update_time: string
  title: string
  content: string
  status: string
  category: string
  author: number
  user: IUser
  tags: ITag[]
}
