/**
 * 过滤数据中的‘空’数据
 * @param {*} data
 * @param {*} types，具体需要过滤的为空的情况，默认过滤undefined和‘’
 * @returns
 */
export const filterTrim = (data = {}, types = [undefined, '', null]) => {
  let tempJson = {};

  for (const key in data) {
    const item = data[key];
    if (!types.includes(item)) {
      tempJson[key] = item;
    }
  }

  return tempJson;
};

/**
 * 判断空值
 * @param {*} value
 * @returns bool
 */
export const isEmpty = (value) => {
  if (value === null || value === undefined || value === '') {
    return true;
  }
  return false;
};
