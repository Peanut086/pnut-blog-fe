import axios, {AxiosResponse} from "axios";
import {AxiosInstance} from "axios"
import {IPnutAxiosConfig, IIntercepter} from "./ITypes";

export class PnutAxiosClass {
  private axiosInstance: AxiosInstance;
  private customInterceptors: IIntercepter<AxiosResponse> | undefined;

  constructor(config: IPnutAxiosConfig) {
    this.axiosInstance = axios.create({
      baseURL: config.baseURL,
      timeout: config.timeout,
    })
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

  public GET(config: IPnutAxiosConfig): Promise<any> {
    return this.commonRequest({...config, method: 'GET'})
  }

  public POST(config: IPnutAxiosConfig): Promise<any> {
    return this.commonRequest({...config, method: 'POST'})
  }

  // 基于axios的request方法二次封装
  private commonRequest(config: IPnutAxiosConfig): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      this.axiosInstance.request(config).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
