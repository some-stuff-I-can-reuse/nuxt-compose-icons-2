// Define the enum with size keys
export enum IconSize {
  s = 's',
  m = 'm',
  l = 'l',
  xl = 'xl',
}

export type IconSizeKey = keyof typeof IconSize;

// This define the interface for size real values
export interface ComposeIconSize {
  [IconSize.s]?: string;
  [IconSize.m]?: string;
  [IconSize.l]?: string;
  [IconSize.xl]?: string;
}
