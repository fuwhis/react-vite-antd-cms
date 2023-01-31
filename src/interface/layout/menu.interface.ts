interface MenuItem {
  /** menu item code */
  code: string;
  /** menu labels */
  label: {
    en_US: string;
    ko_KR: string;
  };
  /** Icon name
   *
   * Submenus don't need icons
   */
  icon?: string;
  /** menu routing */
  path: string;
  /** Submenu */
  children?: MenuItem[];
}

export type MenuChild = Omit<MenuItem, 'children'>;

export type MenuList = MenuItem[];
