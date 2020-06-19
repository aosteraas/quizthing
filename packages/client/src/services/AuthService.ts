import { ApiClient } from './api';

export interface LoginData {
  user: string;
  password: string;
}

const api = new ApiClient();
async function login(data: LoginData) {
  const res = await api.post('/login', data);
  return res;
}

export const AuthService = {
  login,
};
