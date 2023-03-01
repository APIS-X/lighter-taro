import service from '@/services';

export default {
  namespace: 'global',
  state: {
    user: {}, //登录用户信息
    dataRegions: [],
    allTemplateList: [], // 所有模板列表信息
    reportFormData: {}, // 尽调模板报告表单数据,
  },
  effects: {
    // 获取用户信息
    *getUserInfo(_, { call, put }) {
      try {
        const res = yield call(service.getUserInfo);
        const { data } = res;
        if (res) {
          yield put({
            type: 'changeState',
            payload: {
              user: data,
            },
          });
          yield put({ type: 'getAllTemplateList' });
        }
      } catch (error) {
        // console.log('Error:', error);
      }
    },
  },
  reducers: {
    changeState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
