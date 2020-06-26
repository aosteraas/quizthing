import axios, { AxiosInstance, AxiosResponse } from 'axios';
import type { Nullable } from '@quizthing/common';

export interface Api {
  get: <T>(url: string) => Promise<T>;
  post: <T>(url: string, body: any) => Promise<T>;
  put: <T>(url: string, body: any) => Promise<T>;
  patch: <T>(url: string, body: any) => Promise<T>;
  delete: <T>(url: string, body: any) => Promise<T>;
  setAuthToken: (authToken: Nullable<string>) => void;
}

enum HttpStatus {
  Ok = 200,
  Created = 201,
  NoContent = 204,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  Conflict = 409,
  InternalServerError = 500,
  BadGateway = 502,
  ServiceUnavailable = 503,
}

const defaultHeaders = {
  'Content-Type': 'application/json',
};

/**
 * Promise fulfilled handler for api requests.
 * @param res
 */
const onFulfilled = (res: AxiosResponse) => res;

/**
 * Promise rejected handler for api requests.
 * @param err
 */
const onRejected = (err: any) => {
  if (err.response.status === 401) {
    // throw an error?
    return;
  }
  return Promise.reject(err.response.data.message);
};

export class ApiClient implements Api {
  readonly #instance: AxiosInstance;

  #authToken: Nullable<string> = null;

  constructor() {
    const instance = axios.create({
      baseURL: '/api',
      headers: defaultHeaders,
    });

    instance.interceptors.request.use((conf) => {
      if (this.#authToken) {
        conf.headers.Authorization = `Bearer ${this.#authToken}`;
      }
      return conf;
    });

    instance.interceptors.response.use(onFulfilled, onRejected);

    this.#instance = instance;
  }

  get = async <T>(url: string): Promise<T> => {
    const response = await this.#instance.get<T>(url);
    return response.data;
  };

  post = async <T>(url: string, body: any): Promise<T> => {
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

  delete = async <T>(url: string, body: any): Promise<T> => {
    const response = await this.#instance.delete<T>(url, body);
    return response.data;
  };

  setAuthToken = (authToken: Nullable<string>) => {
    this.#authToken = authToken;
  };
}
