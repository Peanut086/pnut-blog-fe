import axios, {AxiosResponse, AxiosInstance, AxiosError} from "axios";
import {IPnutAxiosConfig, IIntercepter, IPnutResponse} from "./ITypes";


export class PnutAxiosClass {
  private axiosInstance: AxiosInstance;
  private customInterceptors: IIntercepter<AxiosResponse> | undefined;

  constructor(config: IPnutAxiosConfig) {
    this.axiosInstance = axios.create(config)
    this.customInterceptors = config.interceptors;

    // 所有实例公用的拦截器
    this.axiosInstance.interceptors.request.use((config) => {
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

  public GET<T>(config: IPnutAxiosConfig): Promise<IPnutResponse<T>> {
    return this.commonRequest<T>({...config, method: 'GET'})
  }

  public POST<T>(config: IPnutAxiosConfig): Promise<IPnutResponse<T>> {
    return this.commonRequest<T>({...config, method: 'POST'})
  }

  public PUT<T>(config: IPnutAxiosConfig): Promise<IPnutResponse<T>> {
    return this.commonRequest<T>({...config, method: 'PUT'})
  }

  public DELETE<T>(config: IPnutAxiosConfig): Promise<IPnutResponse<T>> {
    return this.commonRequest<T>({...config, method: 'DELETE'})
  }

  /*
  * 基于axios的request方法二次封装
  * @param config 请求配置
  * @returns T 返回值类型
  * */
  private commonRequest<T>(config: IPnutAxiosConfig): Promise<IPnutResponse<T>> {
    return new Promise((resolve, reject) => {
      //某个请求独有的拦截器
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      this.axiosInstance.request<any, AxiosResponse<IPnutResponse, IPnutAxiosConfig>>(config).then(res => {
        //单个请求对数据的处理
        if (config.interceptors?.responseInterceptor) {
          res = config.interceptors.responseInterceptor(res)
        }

        // 判断是否是AxiosError
        if (res instanceof AxiosError && res.response) {
          resolve(res.response.data)
          return res.response.data
        }

        resolve(res.data)
        return res.data
      }).catch(err => {
        reject(err)
        return err
      })
    })
  }
}
