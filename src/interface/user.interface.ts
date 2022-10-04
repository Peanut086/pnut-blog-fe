export interface IUser {
  id: number;
  create_time?: Date;
  update_time?: Date;
  nick_name: string;
  phone_number: string;
  email: string;
  introduce: string;
  avatar?: string;
  password?: string;
}
