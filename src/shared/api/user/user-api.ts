import { apiClient } from '@/shared/api/base';

export const userApi = {
  getUsers: async () => {
    return apiClient.get('/users/');
  },
};
