import * as fs from 'node:fs';
import path from 'node:path';

export function writeComponentFile(componentName: string, componentCode: string): string {
  const componentsDir = path.resolve(__dirname, '../../runtime/components/icons-generated');

  if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true });
  }

  const filePath = path.join(componentsDir, `${componentName}.vue`);
  fs.writeFileSync(filePath, componentCode, 'utf-8');
  return filePath;
}
