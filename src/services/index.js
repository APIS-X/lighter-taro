import { getService } from '@/utils/request';

export const api = {
  getInfo: 'info',
};

export default getService('user', api);
