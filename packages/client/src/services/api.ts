import axios, { AxiosInstance } from 'axios';

export interface Api {
  get: <T>(url: string) => Promise<T>;
  post: <T>(url: string, body: any) => Promise<T>;
  put: <T>(url: string, body: any) => Promise<T>;
  patch: <T>(url: string, body: any) => Promise<T>;
}

type Nullable<T> = T | null;

const defaultHeaders = {
  'Content-Type': 'application/json',
};

export class ApiClient implements Api {
  readonly #instance: AxiosInstance;

  #authToken: Nullable<string> = null;

  constructor() {
    const instance = axios.create({
      baseURL: '',
      headers: defaultHeaders,
    });

    instance.interceptors.request.use((conf) => {
      if (this.#authToken) {
        conf.headers.Authorization = `Bearer ${this.#authToken}`;
      }
      return conf;
    });

    this.#instance = instance;
  }

  get = async <T>(url: string): Promise<T> => {
    const response = await this.#instance.get<T>(url);
    return response.data;
  };

  post = async <T>(url: string, body: any): Promise<T> => {
    axios.post('');
    const response = await this.#instance.post<T>(url, body);
    return response.data;
  };

  put = async <T>(url: string, body: any): Promise<T> => {
    const response = await this.#instance.put<T>(url, body);
    return response.data;
  };

  patch = async <T>(url: string, body: any): Promise<T> => {
    const response = await this.#instance.patch<T>(url, body);
    return response.data;
  };

  setAuthToken = (shit: Nullable<string>) => {
    this.#authToken = shit;
  };
}
