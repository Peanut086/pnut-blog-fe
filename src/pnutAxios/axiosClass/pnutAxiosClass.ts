import axios, {AxiosResponse, AxiosInstance} from "axios";
import {IPnutAxiosConfig, IIntercepter, IPnutResponse} from "./ITypes";

export class PnutAxiosClass {
  private axiosInstance: AxiosInstance;
  private customInterceptors: IIntercepter<AxiosResponse> | undefined;

  constructor(config: IPnutAxiosConfig) {
    this.axiosInstance = axios.create(config)
    this.customInterceptors = config.interceptors;

    // 所有实例公用的拦截器
    this.axiosInstance.interceptors.request.use((config) => {
        const headers = config.headers as any // 这里由于axios版本的原因   headers的类型中并不包含Authorization  因此需要使用类型断言
        headers.Authorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjM2NTE1NTQsImV4cCI6MTY2NDI1NjM1NH0.ab62yMnTDQ4zg4w5yXDo9oSvzp2Qii6L2U2XO910W84"
        console.log('Pnut ========> ', "全局拦截器已成功")
        return config;
      },
      (error) => {
        return error;
      })

    this.axiosInstance.interceptors.response.use((response) => {
      console.log('Pnut ========> ', "全局响应拦截已成功")
      return response;
    }, (error) => {
      return error;
    })

    // 某个实例独有的拦截器
    this.axiosInstance.interceptors.request.use(
      this.customInterceptors?.requestInterceptor,
      this.customInterceptors?.requestInterceptorCatch
    )

    this.axiosInstance.interceptors.response.use(
      this.customInterceptors?.responseInterceptor,
      this.customInterceptors?.responseInterceptorCatch
    )
  }

  public GET<T>(config: IPnutAxiosConfig): Promise<any> {
    return this.commonRequest<T>({...config, method: 'GET'})
  }

  public POST<T>(config: IPnutAxiosConfig): Promise<any> {
    return this.commonRequest<T>({...config, method: 'POST'})
  }

  public PUT<T>(config: IPnutAxiosConfig): Promise<any> {
    return this.commonRequest<T>({...config, method: 'PUT'})
  }

  public DELETE<T>(config: IPnutAxiosConfig): Promise<any> {
    return this.commonRequest<T>({...config, method: 'DELETE'})
  }

  /*
  * 基于axios的request方法二次封装
  * @param config 请求配置
  * @returns T 返回值类型
  * */
  private commonRequest<T>(config: IPnutAxiosConfig): Promise<IPnutResponse> {
    return new Promise((resolve, reject) => {
      this.axiosInstance.request<any, AxiosResponse<IPnutResponse>>(config).then(res => {
        let result: IPnutResponse<T> = {} as IPnutResponse<T>
        result = {...res.data}
        resolve(result)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
