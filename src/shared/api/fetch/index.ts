type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface RequestOptions<RequestBody = undefined> {
  method?: RequestMethod;
  headers?: Record<string, string>;
  body?: RequestBody;
}

export const createRequest = async <T = unknown, RequestBody = undefined>(
  url: string,
  options: RequestOptions<RequestBody> = {}
): Promise<T> => {
  const { method = 'GET', headers = {}, body } = options;

  const defaultHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const requestOptions: RequestInit = {
    method,
    headers: { ...defaultHeaders, ...headers },
  };

  if (body) {
    requestOptions.body = JSON.stringify(body);
  }

  try {
    const baseUrl = 'https://jsonplaceholder.typicode.com';
    const response = await fetch(baseUrl + url, requestOptions);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    if (response.status === 204) {
      // No Content
      return null as unknown as T;
    }

    const data = await response.json();
    return data as T;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};
