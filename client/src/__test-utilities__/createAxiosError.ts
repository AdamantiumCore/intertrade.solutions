import {AxiosError, AxiosRequestHeaders, AxiosResponse, InternalAxiosRequestConfig} from 'axios';

export function createAxiosError(response: Partial<AxiosResponse>): AxiosError {
  const error = new Error(response.statusText) as AxiosError;
  error.response = response as AxiosResponse;
  error.config = {
    headers: response.config?.headers ?? { } as  AxiosRequestHeaders,
  };
  error.isAxiosError = true;
  error.toJSON = function() {
    return {
      // Standard properties
      message: this.message ?? '',
      name: this.name ?? '',
      stack: this.stack ?? '',
      config: this.config ?? {} as  InternalAxiosRequestConfig,
      // Axios-specific properties
      isAxiosError: this.isAxiosError,
      response: {
        data: this.response?.data,
        status: this.response?.status,
        statusText: this.response?.statusText,
        headers: this.response?.headers,
        config: this.response?.config
      },
    };
  };
  return error;
}