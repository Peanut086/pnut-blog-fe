import {AxiosRequestConfig, AxiosResponse} from "axios";

// 拦截器对象类型
export interface IIntercepter<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (response: T) => T;
  responseInterceptorCatch?: (error: any) => any;
}

// 自定义axios配置类型
export interface IPnutAxiosConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: IIntercepter<T>;
}

// 通用返回值类型
export interface IPnutResponse<T = any> {
  data: T;
  code: number;
  message: string;
}
