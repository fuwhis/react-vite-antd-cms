import { request } from './request';
import { PageData } from '@/interface';
import { BusinessUser } from '@/interface/business';

export const getBusinessUserList = (params: any) => request<PageData<BusinessUser>>('get', '/business/list', params);
