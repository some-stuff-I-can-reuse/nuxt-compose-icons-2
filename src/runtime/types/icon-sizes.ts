// Define the enum with size keys
export enum IconSize {
  s = 's',
  m = 'm',
  l = 'l',
  xl = 'xl',
}

export type ComposeIconSizes = keyof typeof IconSize;

// Define the interface for size values
export interface IconSizes {
  [IconSize.s]?: string;
  [IconSize.m]?: string;
  [IconSize.l]?: string;
  [IconSize.xl]?: string;
}
