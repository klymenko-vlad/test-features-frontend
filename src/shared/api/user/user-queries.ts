import { userApi } from './user-api';

export const userQueries = {
  getUsers: () => ({
    queryKey: ['users'],
    queryFn: () => userApi.getUsers(),
  }),
};
