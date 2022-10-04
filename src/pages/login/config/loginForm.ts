import {FormItemRule} from "naive-ui";
import {IFormConfig} from "../../../components/formPanel/interface";

export const loginFormConfig: IFormConfig = {
  form: [
    {
      type: 'input',
      label: '账号',
      name: 'username',
      placeholder: '',
      clearable: true,
      disabled: false,
      maxlength: 12,
      round: true,
      labelPlacement: 'left',
      size: 'medium'
    },
    {
      type: 'password',
      label: '密码',
      name: 'password',
      placeholder: '',
      clearable: true,
      disabled: false,
      maxlength: 12,
      round: true,
      labelPlacement: 'left',
      size: 'medium'
    }
  ],
  rules: {
    username: [
      {
        required: true,
        validator(rule: FormItemRule, value: string) {
          if (!value) {
            console.log('Pnut ========> ', value, 1111)
            return new Error('等等！这里是必填项')
          }
          // 不符合邮箱格式
          else if (
            !/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(value)
            && !/^1[3-9]\d{9}$/.test(value)
          ) {
            return new Error('这好像不是邮箱格式也不是手机格式')
          }
          return true
        },
        trigger: ['blur']
      }
    ],
    password: [
      {
        required: true,
        trigger: ['blur'],
        validator(rule: FormItemRule, value: string) {
          if (!value) {
            return new Error("密码为空咋登录")
          } else if (value.length < 6) {
            return new Error("密码长度必须是大于8小于12的字符组合喔")
          }
          return true
        }
      }
    ]
  },
  cancelText: '取消',
  submitText: '登录'
}
