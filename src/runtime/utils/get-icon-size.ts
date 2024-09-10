import type { ComposeIconSizes } from '../types';
import { IconSize } from '../types';

export function getIconSize(size: ComposeIconSizes): string {
  if (size in IconSize) {
    return IconSize[size];
  } else {
    return size;
  }
}
