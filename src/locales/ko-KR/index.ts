import { koKR_account } from './account';
import { koKR_avatorDropMenu } from './user/avatorDropMenu';
import { koKR_tagsViewDropMenu } from './user/tagsViewDropMenu';
import { koKR_title } from './user/title';
import { koKR_globalTips } from './global/tips';
import { koKR_permissionRole } from './permission/role';
import { koKR_dashboard } from './dashboard';
import { koKR_guide } from './guide';
import { koKR_documentation } from './documentation';
import { koKR_notice } from './notice';

const ko_KR = {
  ...koKR_account,
  ...koKR_avatorDropMenu,
  ...koKR_tagsViewDropMenu,
  ...koKR_title,
  ...koKR_globalTips,
  ...koKR_permissionRole,
  ...koKR_dashboard,
  ...koKR_guide,
  ...koKR_documentation,
  ...koKR_notice,
};

export default ko_KR;
