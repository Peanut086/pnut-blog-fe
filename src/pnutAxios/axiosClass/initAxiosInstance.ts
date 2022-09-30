import {useMessage} from "naive-ui";
import {PnutAxiosClass} from './pnutAxiosClass';
import LocalStorageUtil from "../../utils/localStorageUtil";
import {BASE_URL, TIME_OUT} from "./config";

const message = useMessage();
const PnutAxiosInstance = new PnutAxiosClass({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log('Pnut ========> ', "单实例拦截器已生效")
      // 请求添加token
      const token = LocalStorageUtil.get('token');
      const headers = config.headers as any
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      } else {
        message.error("请先登录");
      }
      return config;
    },
    requestInterceptorCatch: (error) => {
      console.log('Pnut ========> ', "单实例拦截器已失败")
      return error
    },
    responseInterceptor: (response) => {
      console.log('Pnut ========> ', "单实例响应拦截已生效")
      return response;
    },
    responseInterceptorCatch: (error) => {
      console.log('Pnut ========> ', "单实例响应拦截已失败")
      return error;
    }
  }
})
export default PnutAxiosInstance;
