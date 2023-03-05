/**
 * Description: 页面Layout
 */
import React, { useEffect } from 'react';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from 'react-redux';
import { Tabbar, TabbarItem } from '@nutui/nutui-react';
import { ConfigProvider } from '@nutui/nutui-react';
import zh from '@nutui/nutui-react/dist/locales/zh-CN';

import { goTo } from '@/utils';

const navStyle = { paddingTop: '46px' };

const enumTabBars = {
  index: 'pages/index/index',
  sign: 'pages/sign/index',
  mine: 'pages/mine/index',
};

const listMenus = [
  {
    key: 'index',
    title: '首页',
    icon: 'home',
    path: 'pages/index/index',
  },
  {
    key: 'sign',
    title: '在线报名',
    icon: 'category',
    path: 'pages/sign/index',
  },
  {
    key: 'mine',
    title: '我的',
    icon: 'my',
    path: 'pages/mine/index',
  },
];

const Template = ({
  dispatch,
  wrapClass = '',
  bgDark = true,
  footer,
  loading = false,
  children,
  activeIndex = 0,
  hasNav = false,
  hasTabBar = true,
}) => {
  const onSwitch = (child, idx) => {
    goTo({ type: 'switchTab', url: child.props.path });
  };
  return (
    <ConfigProvider locale={zh}>
      <View
        className={`g-wrap-page ${bgDark ? '' : 'bg-light'} ${
          footer ? 'footer' : ''
        } ${wrapClass}`}
        style={hasNav ? navStyle : {}}
      >
        {/* {loading && <Loading type='spinner' />} */}
        {children}

        <View className='g-fixed-bottom'></View>

        <View className='footer-fixeds'>
          {footer ? (
            <>{footer()}</>
          ) : (
            <>
              {hasTabBar && (
                <Tabbar
                  bottom
                  safeAreaInsetBottom
                  activeVisible={activeIndex}
                  onSwitch={onSwitch}
                >
                  {listMenus.map(({ key, title, icon, path }) => {
                    return (
                      <TabbarItem
                        key={key}
                        path={path}
                        tabTitle={title}
                        icon={icon}
                      />
                    );
                  })}
                </Tabbar>
              )}
            </>
          )}
        </View>
      </View>
    </ConfigProvider>
  );
};

export default connect(({ global }) => ({
  global,
}))(React.memo(Template));
