import {FormItemRule} from "naive-ui";
import {IFormConfig} from "../../../components/formPanel/interface";

export const registerFormConfig: IFormConfig = {
  form: [
    {
      type: 'input',
      label: '用户名',
      name: 'nick_name',
      placeholder: '',
      clearable: true,
      disabled: false,
      maxlength: 12,
      round: true,
      labelPlacement: 'left',
      size: 'medium'
    },
    {
      type: 'input',
      label: '手机号',
      name: 'phone_number',
      placeholder: '',
      clearable: true,
      disabled: false,
      maxlength: 12,
      round: true,
      labelPlacement: 'left',
      size: 'medium'
    }, {
      type: 'password',
      label: '设置密码',
      name: 'password',
      placeholder: '',
      clearable: true,
      disabled: false,
      maxlength: 12,
      round: true,
      labelPlacement: 'left',
      size: 'medium'
    }, {
      type: 'input',
      label: '邮箱',
      name: 'email',
      placeholder: '',
      clearable: true,
      disabled: false,
      round: true,
      labelPlacement: 'left',
      size: 'medium'
    },
    {
      type: 'textarea',
      label: '简单介绍一下吧',
      name: 'introduce',
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
    nick_name: [
      {
        required: true,
        validator(rule: FormItemRule, value: string) {
          if (!value) {
            return new Error('等等！先给自己起个名字吧')
          }
          return true
        },
        trigger: ['blur']
      }
    ],
    phone_number: [
      {
        required: true,
        trigger: ['blur'],
        validator(rule: FormItemRule, value: string) {
          if (!value) {
            return new Error("手机号！！！")
          }
          // 验证手机号格式
          if (!/^1[3456789]\d{9}$/.test(value)) {
            return new Error("手机号格式不正确")
          }
          return true
        }
      }
    ],
    email: [
      {
        required: true,
        trigger: ['blur'],
        validator(rule: FormItemRule, value: string) {
          if (!value) {
            return new Error("邮箱也别忘了")
          }
          // 验证邮箱格式
          if (!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)) {
            return new Error("邮箱式不正确")
          }
          return true
        }
      }
    ],
    password: [
      {
        required: true,
        trigger: ['blur'],
        validator(rule: FormItemRule, value: string) {
          if (!value) {
            return new Error("密码得设置啊哥们")
          }
          // 验证密码格式 长度6-12位  不包含空格 必须包含数字和字母
          else if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/.test(value)) {
            return new Error("密码格式不正确")
          }
          return true
        }
      }
    ]
  },
  cancelText: '取消',
  submitText: '登录'
}
