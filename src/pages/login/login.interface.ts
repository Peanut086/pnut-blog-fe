import {IUser} from "../../interface/user.interface";

export interface ILoginInterface {
  username?: string | number
  password?: string
}

export interface ILoginResponse {
  token: string,
  userInfo: IUser
}
