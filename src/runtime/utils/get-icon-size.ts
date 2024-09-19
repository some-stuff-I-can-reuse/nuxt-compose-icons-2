import type { IconSizeKey } from '../types';
import { IconSize } from '../types';

export function getIconSize(size: IconSizeKey): string {
  if (size in IconSize) {
    return IconSize[size];
  } else {
    return size;
  }
}
