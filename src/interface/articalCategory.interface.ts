export interface IArticalCategory {
  id: number;
  name: string;
  pid: number;
  type: number;
  update_time: string;
  create_time: string;
  children?: IArticalCategory[];
  label?: string;
  key?: number;
}
