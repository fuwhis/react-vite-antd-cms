import { MenuList } from '@/interface/layout/menu.interface';
import { mock, intercepter } from '../config';

const mockMenuList: MenuList = [
  {
    code: 'dashboard',
    label: {
      zh_CN: '首页',
      en_US: 'Dashboard',
      ko_KR: '계기반',
    },
    icon: 'dashboard',
    path: '/dashboard',
  },
  {
    code: 'documentation',
    label: {
      zh_CN: '文档',
      en_US: 'Documentation',
      ko_KR: '선적 서류 비치',
    },
    icon: 'documentation',
    path: '/documentation',
  },
  {
    code: 'guide',
    label: {
      zh_CN: '引导',
      en_US: 'Guide',
      ko_KR: '가이드',
    },
    icon: 'guide',
    path: '/guide',
  },
  {
    code: 'permission',
    label: {
      zh_CN: '权限',
      en_US: 'Permission',
      ko_KR: '권한',
    },
    icon: 'permission',
    path: '/permission',
    children: [
      {
        code: 'routePermission',
        label: {
          zh_CN: '路由权限',
          en_US: 'Route Permission',
          ko_KR: '허가',
        },
        path: '/permission/route',
      },
      {
        code: 'notFound',
        label: {
          zh_CN: '404',
          en_US: '404',
          ko_KR: '404',
        },
        path: '/permission/404',
      },
    ],
  },
  {
    code: 'component',
    label: {
      zh_CN: '组件',
      en_US: 'Component',
      ko_KR: '구성 요소',
    },
    icon: 'permission',
    path: '/component',
    children: [
      {
        code: 'componentForm',
        label: {
          zh_CN: '表单',
          en_US: 'Form',
          ko_KR: '형태',
        },
        path: '/component/form',
      },
      {
        code: 'componentTable',
        label: {
          zh_CN: '表格',
          en_US: 'Table',
          ko_KR: '테이블',
        },
        path: '/component/table',
      },
      {
        code: 'componentSearch',
        label: {
          zh_CN: '查询',
          en_US: 'Search',
          ko_KR: '찾다',
        },
        path: '/component/search',
      },
      {
        code: 'componentAside',
        label: {
          zh_CN: '侧边栏',
          en_US: 'Aside',
          ko_KR: '곁에',
        },
        path: '/component/aside',
      },
      {
        code: 'componentTabs',
        label: {
          zh_CN: '选项卡',
          en_US: 'Tabs',
          ko_KR: '탭',
        },
        path: '/component/tabs',
      },
      {
        code: 'componentRadioCards',
        label: {
          zh_CN: '单选卡片',
          en_US: 'Radio Cards',
          ko_KR: '라디오 카드',
        },
        path: '/component/radio-cards',
      },
    ],
  },

  {
    code: 'business',
    label: {
      zh_CN: '业务',
      en_US: 'Business',
      ko_KR: '사업',
    },
    icon: 'permission',
    path: '/business',
    children: [
      {
        code: 'basic',
        label: {
          zh_CN: '基本',
          en_US: 'Basic',
          ko_KR: '기초적인',
        },
        path: '/business/basic',
      },
      {
        code: 'withSearch',
        label: {
          zh_CN: '带查询',
          en_US: 'WithSearch',
          ko_KR: '쿼리로',
        },
        path: '/business/with-search',
      },
      {
        code: 'withAside',
        label: {
          zh_CN: '带侧边栏',
          en_US: 'WithAside',
          ko_KR: '사이드바 포함',
        },
        path: '/business/with-aside',
      },
      {
        code: 'withRadioCard',
        label: {
          zh_CN: '带单选卡片',
          en_US: 'With Nav Tabs',
          ko_KR: '라디오 카드 첨부',
        },
        path: '/business/with-radio-cards',
      },
      {
        code: 'withTabs',
        label: {
          zh_CN: '带选项卡',
          en_US: 'With Tabs',
          ko_KR: '탭으로',
        },
        path: '/business/with-tabs',
      },
    ],
  },
];

mock.mock('/user/menu', 'get', intercepter(mockMenuList));
