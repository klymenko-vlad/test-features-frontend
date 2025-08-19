import { apiClient } from '@/shared/api/base';
import { envVariables } from '@/shared/constants';
import axios from 'axios';

export const authApi = {
  login: async (loginBody: { email: string; password: string }) => {
    const response = await axios.post(
      `${envVariables.API_BASE_URL}auth/login`,
      {
        ...loginBody,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      },
    );

    return response.data;
  },

  register: (body: { email: string; password: string }) => {
    return apiClient.post<{ email: string; password: string }>('/users/', body);
  },
};
