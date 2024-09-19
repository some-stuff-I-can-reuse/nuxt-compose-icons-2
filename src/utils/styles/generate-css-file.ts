import type { ComposeIconSize } from '../../runtime/types';
import { IconSize } from '../../runtime/types';

// Default icon sizes if none have been provided to the module
const defaultSizes: ComposeIconSize = {
  [IconSize.s]: '1rem',
  [IconSize.m]: '2rem',
  [IconSize.l]: '3rem',
  [IconSize.xl]: '4rem',
};

/*
 * Generate a CSS file with the custom icon sizes provided
 * that will then be used to style the icons (see /runtime/assets/compose-icon.css)
 *
 * .compose-icon {
 *   width: var(--icon-size);
 *   height: var(--icon-size);
 * }
 *
 * .compose-icon.size-s {
 *  --icon-size: var(--icon-size-s);
 * }
 *
 * TODO: Am I right?
 * If the component prop change, it will update the '--icon-size' value
 * and since it's a CSS variable, it will automatically update the class applied to the icon
 * at runtime without involving too much JavaScript
 */
export function generateCssFile(ComposeIconSize?: ComposeIconSize) {
  const sizes = { ...defaultSizes, ...ComposeIconSize };

  const cssContent = `:root {
  --icon-size-${IconSize.s}: ${sizes[IconSize.s]};
  --icon-size-${IconSize.m}: ${sizes[IconSize.m]};
  --icon-size-${IconSize.l}: ${sizes[IconSize.l]};
  --icon-size-${IconSize.xl}: ${sizes[IconSize.xl]};
}
`;

  return cssContent;
}
