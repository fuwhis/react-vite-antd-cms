/** user's device */
enum DeviceList {
  /** mobile */
  MOBILE = 'MOBILE',
  /** tablet */
  TABLET = 'TABLET',
  /** computer */
  DESKTOP = 'DESKTOP',
}

export type Device = keyof typeof DeviceList;
