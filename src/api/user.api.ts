import { request } from './request';
import { LoginResult, LoginParams, LogoutParams, LogoutResult } from '../interface/user/login';

/** API Login */
export const apiLogin = (data: LoginParams) => request<LoginResult>('post', '/user/login', data);

/** API Logout */
export const apiLogout = (data: LogoutParams) => request<LogoutResult>('post', '/user/logout', data);
