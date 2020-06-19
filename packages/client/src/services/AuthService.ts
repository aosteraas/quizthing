import { ApiClient } from './api';
import { Tokens } from '../store/auth';

export interface LoginData {
  user: string;
  password: string;
}

const api = new ApiClient();

async function login(data: LoginData) {
  const res = await api.post<Tokens>('/login', data);
  return res;
}

export const AuthService = {
  login,
};
