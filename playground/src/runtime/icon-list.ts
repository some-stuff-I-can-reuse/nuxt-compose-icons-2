import { createComponentFromName } from '../../../src/utils/components/create-component-from-name';

const pathTpSvgIcons = './assets/images/icons';

const add = () => import(`${pathTpSvgIcons}/add.svg`);
const antique = () => import(`${pathTpSvgIcons}/antique.svg`);
const axe = () => import(`${pathTpSvgIcons}/axe.svg`);

export { add, antique, axe };

const MyComponent = createComponentFromName;
