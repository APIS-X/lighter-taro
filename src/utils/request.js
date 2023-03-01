import Taro from '@tarojs/taro';
import { STORAGE_TOKEN } from '@/common';
import { regUrl } from '@/common/reg';
import { goTo, showToast } from '@/utils';
import { filterTrim } from '@/utils/tools';

const getPrefixUrl = (prefix, url) => {
  return regUrl.test(url) || !prefix ? url : `${prefix}/${url}`;
};

/**
 * 将api转换成接口方法
 * @param {*} api
 * @returns
 */
export const getService = (modulePrefix, api) => {
  let service = {};
  for (let key in api) {
    const item = api[key];
    const isObj = typeof item === 'object';

    let url = getPrefixUrl(modulePrefix, item);
    let option = {};

    if (isObj) {
      const { url: _url, method, ...others } = item;
      url = getPrefixUrl(modulePrefix, _url);
      option = {
        method,
        ...others,
      };
    } else {
      option = {
        method: 'GET',
      };
    }

    service[key] = async (data = '', callback) => {
      return typeof data === 'string'
        ? request(`${url}${data}`, {}, option, callback)
        : request(url, data || {}, option, callback);
    };
  }

  return service;
};

export const createFormData = (params = {}, boundary = '') => {
  let result = '';
  for (let i in params) {
    result += `\r\n--${boundary}`;
    result += `\r\nContent-Disposition: form-data; name="${i}"`;
    result += '\r\n';
    result += `\r\n${params[i]}`;
  }
  // 如果obj不为空，则最后一行加上boundary
  if (result) {
    result += `\r\n--${boundary}`;
  }
  return result;
};

/**
 * 接口数据请求二次封装
 * @param {*} url
 * @param {*} method
 * @param {*} data
 * @returns
 */
export const request = async (url, data, option, callback = {}) => {
  const callRequest = option.requestType || 'request';

  let params = {
    url: getPrefixUrl($urlPrefix + '/rest', url),
    data: filterTrim(data),
    header: {
      [authTokenKey]: Taro.getStorageSync(STORAGE_TOKEN.authTokenKey),
    },
    ...option,
  };

  // 上传文件逻辑
  if (callRequest === 'uploadFile') {
    params = {
      url: getPrefixUrl($urlPrefix + '/rest', url),
      name: 'file',
      ...data,
      ...option,
    };
  }

  try {
    const fn = callRequest === 'uploadFile' ? Taro.uploadFile : Taro.request;
    const res = await fn(params);
    if (res.statusCode === 200) {
      res.data = typeof res.data === 'string' ? JSON.parse(res.data) : res.data;
      const { success, code, msg } = res.data;

      if (success || callback.direct) {
        return Promise.resolve(res.data);
      }
      if (code === '107') {
        showToast.error(msg || '重新登录');

        setTimeout(() => {
          goTo({ url: '/pages/user/login/index' });
        }, 2000);
        return;
      }
      showToast.error({ title: msg || '请求失败', duration: 4000 });
      return false;
    }
  } catch (error) {
    showToast.error('请求失败');
    console.log('Error:', error);
  }
};

export default request;
