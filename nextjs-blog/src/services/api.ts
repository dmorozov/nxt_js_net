import axios, {
  AxiosError,
  AxiosHeaders,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

import { AuthenticationError, SecurityError } from './auth/auth.error';

export function handleApiErrors<T>(response: AxiosResponse<unknown>): T {
  if (response.status === 401) throw new AuthenticationError(SecurityError.AUTHENTICATION);
  else if (response.status === 403) throw new AuthenticationError(SecurityError.AUTHORIZATION);
  if (!response.data) throw Error(response.statusText);
  return response.data as T;
}

export class RestService {
  client: AxiosInstance;
  token: string | null = null; // TODO: copy authentication token from localStorage

  constructor() {
    this.client = axios.create({
      headers: {
        baseURL: process.env.API_BASE_URL, //set the base url on .env file
        timeout: 5000,
      },
    });

    this.initializeRequestInterceptor();
    this.initializeResponseInterceptor();
  }

  private initializeRequestInterceptor = () => {
    this.client.interceptors.request.use(this.handleRequest);
  };

  private initializeResponseInterceptor = () => {
    this.client.interceptors.response.use((response) => {
      if (response.headers && response.headers.authorization) {
        const responseToken = response.headers.authorization as string;

        this.token = responseToken;

        localStorage.setItem('hashToken', this.token);
      }

      return response;
    }, this.handleError);
  };

  private handleRequest = (config: InternalAxiosRequestConfig) => {
    if (this.token) {
      config.headers['Authorization'] = `Bearer ${this.token}`;
    }

    return config;
  };

  private handleError = async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig;
    if (error.response?.status === 401) {
      const refreshToken = await this.refreshToken();
      if (refreshToken.status === 200) {
        this.token = refreshToken.data.hashToken;
        localStorage.setItem('hashToken', this.token || '');
        return this.client(originalRequest);
      }
    }
  };

  private async refreshToken(): Promise<{
    status: number;
    data: {
      hashToken: string;
    };
  }> {
    return { status: 200, data: { hashToken: '' } };
  }

  /*
  Content types:
  application/x-www-form-urlencoded
  application/json
  */
  post<PAYLOAD, RESPONSE>(url: string, payload: PAYLOAD, contentType = 'application/json'): Promise<RESPONSE> {
    return this.client
      .post(url, payload, {
        headers: {
          ...this.defaultHeaders(),
          'Content-Type': contentType,
        },
      })
      .then((response) => handleApiErrors<RESPONSE>(response))
      .catch((error) => {
        throw error;
      });
  }

  get<RESPONSE>(url: string): Promise<RESPONSE> {
    return this.client
      .get(url, {
        headers: {
          ...this.defaultHeaders(),
        },
      })
      .then((response) => handleApiErrors<RESPONSE>(response))
      .catch((error) => {
        throw error;
      });
  }

  defaultHeaders(): AxiosRequestHeaders {
    return new AxiosHeaders({
      'X-Requested-With': 'XMLHttpRequest',
      // 'X-XSRF-TOKEN': readCsrfTokenFromCookies('XSRF-TOKEN') // this seeems to be automatically done by Axios?!
    });
  }
}
