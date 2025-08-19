import { authApi } from '@/shared/api/auth/auth.api';

export const authMutation = {
  login: () => ({
    mutationKey: ['campaigns', 'login'],
    mutationFn: (data: { email: string; password: string }) =>
      authApi.login(data),
  }),

  register: () => ({
    mutationKey: ['campaigns', 'register'],
    mutationFn: (data: { email: string; password: string }) =>
      authApi.register(data),
  }),
};
