import type { IconSizes } from '../../runtime/types';
import { IconSize } from '../../runtime/types';

const defaultSizes: IconSizes = {
  [IconSize.s]: '1rem',
  [IconSize.m]: '2rem',
  [IconSize.l]: '3rem',
  [IconSize.xl]: '4rem',
};

export function generateCssFile(iconSizes?: IconSizes) {
  const sizes = { ...defaultSizes, ...iconSizes };

  const cssContent = `
    :root {
      --icon-size-${IconSize.s}: ${sizes[IconSize.s]};
      --icon-size-${IconSize.m}: ${sizes[IconSize.m]};
      --icon-size-${IconSize.l}: ${sizes[IconSize.l]};
      --icon-size-${IconSize.xl}: ${sizes[IconSize.xl]};
    }`;

  return cssContent;
}
