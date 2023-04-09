import ky from 'ky';

import { API_URL } from '#/shared/constants';

// Define the request method type
type RequestMethod = 'get' | 'post' | 'put' | 'delete' | 'patch';

// Generic interface for API response
export interface ApiResponse<T> {
  data: T;
  status: number;
}

export const original = ky.create({
  prefixUrl: API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

// Generic function to create API requests
export const createRequest = async <T, B = undefined>(
  url: string,
  method: RequestMethod = 'get',
  body?: B
): Promise<ApiResponse<T>> => {
  const options = {
    method: method,
    json: body,
  };

  const response = await original(url, options);
  const data: T = await response.json();
  const status: number = response.status;

  return {
    data,
    status,
  };
};
