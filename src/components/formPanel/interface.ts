import {FormRules} from "naive-ui";

export interface IFormData {
  type: any
  label: string
  name: string
  placeholder?: string
  clearable?: boolean
  disabled?: boolean
  maxlength?: number
  round?: boolean
  labelPlacement?: any
  size?: any
}

export interface IFormConfig {
  form: Array<IFormData>
  rules: FormRules
  cancelText?: string
  submitText?: string
}
