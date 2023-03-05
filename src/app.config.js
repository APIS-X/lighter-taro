export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/sign/index',
    'pages/mine/index',
    'pages/user/login',
    'pages/user/register',
    'pages/user/forget',
    'pages/user/edit',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
});
