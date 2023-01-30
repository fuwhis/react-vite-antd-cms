import { Notice } from '@/interface/layout/notice.interface';
import { intercepter, mock } from '../config';

const mockNoticeList: Notice<'all'>[] = [
  {
    id: '000000001',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
    title: 'You received 14 new weekly newspapers',
    datetime: '2023-08-09',
    type: 'notification',
  },
  {
    id: '000000002',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
    title: 'QuyNg you recommended has passed the third round of interview',
    datetime: '2023-08-08',
    type: 'notification',
  },
  {
    id: '000000003',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
    title: 'This template can distinguish between multiple notification types',
    datetime: '2023-08-07',
    read: true,
    type: 'notification',
  },
  {
    id: '000000004',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
    title: 'Icons on the left are used to distinguish between different types',
    datetime: '2023-08-07',
    type: 'notification',
  },
  {
    id: '000000005',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
    title: 'The content should not exceed two lines, and it will be automatically truncated when it exceeds',
    datetime: '2023-08-07',
    type: 'notification',
  },
  {
    id: '000000006',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
    title: 'LiLi has commented on you',
    description: 'Description on demands',
    datetime: '2023-08-07',
    type: 'message',
    clickClose: true,
  },
  {
    id: '000000007',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
    title: 'Yurim replied to you',
    description:
      'This template is used to remind who has interacted with you, and the avatar of "who" is placed on the left',
    datetime: '2023-08-07',
    type: 'message',
    clickClose: true,
  },
  {
    id: '000000008',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
    title: 'title',
    description:
      'This template is used to remind who has interacted with you, and the avatar of "who" is placed on the left',
    datetime: '2023-08-07',
    type: 'message',
    clickClose: true,
  },
  {
    id: '000000009',
    title: 'mission name',
    description: 'The task needs to be started before 2023-01-12 20:00',
    extra: 'Not Start',
    status: 'todo',
    type: 'event',
  },
  {
    id: '000000010',
    title: 'Third Party Emergency Code Changes',
    description: 'Submitted by Gawain on 2023-01-06, the code change task needs to be completed before 2023-01-07',
    extra: 'due soon',
    status: 'urgent',
    type: 'event',
  },
  {
    id: '000000011',
    title: 'Information Security Exam',
    description: 'Assign Mark to complete the update and publish task by 2022-01-09',
    extra: '8 days have passed',
    status: 'doing',
    type: 'event',
  },
  {
    id: '000000012',
    title: 'ABCD version release',
    description: 'Submitted by Gawain on 2023-01-06, the code change task needs to be completed before 2023-01-07',
    extra: 'processing',
    status: 'processing',
    type: 'event',
  },
];

mock.mock('/user/notice', 'get', intercepter(mockNoticeList));
