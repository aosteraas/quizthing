import { ApiClient } from './api';
import { Tokens } from '../store/auth';
import { RegisterData } from '../store/registration';

export interface LoginData {
  user: string;
  password: string;
}

const api = new ApiClient();

async function login(data: LoginData) {
  const res = await api.post<Tokens>('/login', data);
  return res;
}

async function register(data: RegisterData) {
  const res = await api.post<void | string[]>('/auth/register', data);
  return res;
}

export const AuthService = {
  login,
  register,
};
