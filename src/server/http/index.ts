import axios, { AxiosRequestConfig, Method } from 'axios';
import { queryFormat } from '@/utils/helper';
import { NotNullBasicType } from '@/types/common';

export class Http {
  // // protected exception: Exception
  // static Load() {
  //   return Singleton.make(Request) as Request;
  // }

  constructor() {
    // this.exception = Exception.Load();
    axios.interceptors.request.use((config: Object) => {
      return config;
    });

    axios.interceptors.response.use(
      (response) => {
        if (/^2\d/.test(response.status.toString())) {
          return response.data;
        }
        return response.statusText;
      },

      (error) => {
        console.error(error);

      }
    );
  }

  get<T = unknown>(uri: string, query?: Record<string, NotNullBasicType | Array<NotNullBasicType>>, config?: AxiosRequestConfig): Promise<T> {
    //return fromPromise(axios.get(uri, config));
    return axios.get(queryFormat(uri, query), config);
  }

  post<T = unknown>(uri: string, data?: Record<string, unknown>, query?: Record<string, NotNullBasicType | Array<NotNullBasicType>>, config?: AxiosRequestConfig): Promise<T> {
    // return fromPromise(axios.post(uri, data, config));
    return axios.post(queryFormat(uri, query), data, config);
  }

  put<T = unknown>(uri: string, data?: Record<string, unknown>, query?: Record<string, NotNullBasicType | Array<NotNullBasicType>>, config?: AxiosRequestConfig): Promise<T> {
    // return fromPromise(axios.put(uri, data, config));
    return axios.put(queryFormat(uri, query), data, config);
  }

  del<T = unknown>(uri: string, query?: Record<string, NotNullBasicType | Array<NotNullBasicType>>, config?: AxiosRequestConfig): Promise<T> {
    //return fromPromise(axios.delete(uri, config));
    return axios.delete(queryFormat(uri, query), config);
  }

  request<T = unknown>(uri: string, method: Method,  data?: Record<string, unknown>, query?: Record<string, NotNullBasicType | Array<NotNullBasicType>>, config?: AxiosRequestConfig): Promise<T> {

    const c = Object.assign({}, config || { });
    c.url = queryFormat(uri, query);
    c.data = Object.assign(c.data || {}, data || {});
    //return fromPromise(axios.request(config));
    return axios.request(c);
  }
}
