import {PnutAxiosClass} from './pnutAxiosClass';

const PnutAxiosInstance = new PnutAxiosClass({
  baseURL: '/api', // 设置代理  必须是与vite.config.ts中的proxy中的target一致
  timeout: 5000,
  interceptors: {}
})
export default PnutAxiosInstance;
