import axios, { AxiosResponse, AxiosInstance, AxiosError } from 'axios'
import { IPnutAxiosConfig, IIntercepter, IPnutResponse } from './ITypes'
// pinia在单独的ts文件中使用需要这样   否则会报错
import pinia from '../../store'
import { useSpinControl } from '../../store/modules/spinControl'

const spinControlStore = useSpinControl(pinia)

export class PnutAxiosClass {
  private readonly axiosInstance: AxiosInstance
  private readonly customInterceptors: IIntercepter<AxiosResponse> | undefined
  private readonly showLoading: boolean | undefined

  constructor (config: IPnutAxiosConfig) {
    this.axiosInstance = axios.create(config)
    this.customInterceptors = config.interceptors
    this.showLoading = config.showLoading

    // 所有实例公用的拦截器
    this.axiosInstance.interceptors.request.use((config) => {
      console.log('Pnut ========> ', '全局拦截器已成功')
      return config
    },
    (error) => {
      return error
    })

    this.axiosInstance.interceptors.response.use((response) => {
      console.log('Pnut ========> ', '全局响应拦截已成功')
      return response
    }, (error) => {
      return error
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

  public async GET<T>(config: IPnutAxiosConfig): Promise<IPnutResponse<T>> {
    return await this.commonRequest<T>({ ...config, method: 'GET' })
  }

  public async POST<T>(config: IPnutAxiosConfig): Promise<IPnutResponse<T>> {
    return await this.commonRequest<T>({ ...config, method: 'POST' })
  }

  public async PUT<T>(config: IPnutAxiosConfig): Promise<IPnutResponse<T>> {
    return await this.commonRequest<T>({ ...config, method: 'PUT' })
  }

  public async DELETE<T>(config: IPnutAxiosConfig): Promise<IPnutResponse<T>> {
    return await this.commonRequest<T>({ ...config, method: 'DELETE' })
  }

  /*
  * 基于axios的request方法二次封装
  * @param config 请求配置
  * @returns T 返回值类型
  * */
  private async commonRequest<T>(config: IPnutAxiosConfig): Promise<IPnutResponse<T>> {
    return await new Promise((resolve, reject) => {
      if (!this.showLoading && !config.showLoading) {
        // 只要有一个关闭  就不加载loading
      } else {
        spinControlStore.setState(true)
      }

      // 某个请求独有的拦截器
      if ((config.interceptors?.requestInterceptor) != null) {
        config = config.interceptors.requestInterceptor(config)
      }
      this.axiosInstance.request<any, AxiosResponse<IPnutResponse, IPnutAxiosConfig>>(config).then(res => {
        // 单个请求对数据的处理
        if ((config.interceptors?.responseInterceptor) != null) {
          res = config.interceptors.responseInterceptor(res)
        }

        // 判断是否是AxiosError
        if (res instanceof AxiosError && (res.response != null)) {
          resolve(res.response.data)
          return res.response.data
        }

        resolve(res.data)
        return res.data
      }).catch(err => {
        reject(err)
        return err
      }).finally(() => {
        spinControlStore.setState(false)
      })
    })
  }
}
