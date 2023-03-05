import Taro from '@tarojs/taro';
import queryString from 'query-string';

import { isEmpty } from './tools';

/**
 * 页面跳转
 * @param {String} url 链接地址，不要带参数
 * @param {Object} urlQuery url后要带的参数
 * @param {Object} originOpt 原Api中的属性集合
 * @param {String} type  跳转类型  switchTab|reLaunch|redirectTo|navigateTo
 */
export const goTo = ({
  url,
  urlQuery,
  originOpt = {},
  type = 'navigateTo',
}) => {
  const opt = {
    ...originOpt,
    url: isEmpty(urlQuery) ? url : url + '?' + queryString.stringify(urlQuery),
  };

  Taro[type](opt);
};

/**
 * @description Toast封装，封装的目的是扩展和简化使用过程中的传参，并支持回调，多用于表单提交成功提示后的跳转操作等
 * @param {String || Object} options 为对象的时候参数同Taro.showToast,为String的时候为提示文案
 * @param {Function} callback toast提示后的回调或者toast提示后要跳转的路径
 * @param {String} openType 当callback为字符串的时候，跳转链接的方式
 */
export const showToast = {
  init: (type, options, callback, openType) => {
    if (typeof options === 'object') {
      options = {
        icon: type,
        ...options,
      };
    } else {
      options = {
        title: String(options),
        icon: type,
      };
    }
    Taro.showToast(options);

    if (callback) {
      setTimeout(() => {
        if (typeof callback === 'function') {
          callback();
        } else {
          Taro[openType]({ url: callback });
        }
      }, 1000);
    }
  },
  success: (options, callback, openType = 'reLaunch') => {
    showToast.init('success', options, callback, openType);
  },
  error: (options, callback, openType = 'reLaunch') => {
    showToast.init('none', options, callback, openType);
  },
};
