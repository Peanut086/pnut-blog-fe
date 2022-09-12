import {VNode} from "vue"

export interface IIHeaderMenus {
  label: string;
  key: string;
  disabled?: boolean;
  icon?: (h: any) => VNode;
}
