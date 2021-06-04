import axios, { AxiosResponse } from 'axios';

declare module 'axios' {
  export interface AxiosInstance {
    (config: AxiosRequestConfig): AxiosPromise;
    (url: string, config?: AxiosRequestConfig): AxiosPromise;
    defaults: AxiosRequestConfig;
    interceptors: {
      request: AxiosInterceptorManager<AxiosRequestConfig>;
      response: AxiosInterceptorManager<AxiosResponse>;
    };
    getUri(config?: AxiosRequestConfig): string;
    request<T = unknown, R = T>(config: AxiosRequestConfig): Promise<R>;
    get<T = unknown, R = T>(url: string, config?: AxiosRequestConfig): Promise<R>;
    delete<T = unknown, R = T>(url: string, config?: AxiosRequestConfig): Promise<R>;
    head<T = unknown, R = T>(url: string, config?: AxiosRequestConfig): Promise<R>;
    options<T = unknown, R = T>(url: string, config?: AxiosRequestConfig): Promise<R>;
    post<T = unknown, R = T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<R>;
    put<T = unknown, R = T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<R>;
    patch<T = unknown, R = T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<R>;
  }
}

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },

  (error: AxiosResponse) => {
    return Promise.reject(error.data);
  }
);

export default axios;
