import {ITag} from "./tag.interface";
import {IUser} from "./user.interface";

export interface IArticalCategory {
  id: number;
  name: string;
  pid: number;
  type: number;
  update_time: string;
  create_time: string;
  children?: IArticalCategory[];
  tag?: ITag[];
  user?: IUser
  label?: string;
  key?: number;
}
