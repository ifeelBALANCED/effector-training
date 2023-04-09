import { createRequest } from '#/shared/api';

export const getPosts = async () => {
  return await createRequest('/posts');
};
