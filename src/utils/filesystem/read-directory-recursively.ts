import * as fs from 'node:fs';
import path from 'node:path';

export function readDirectoryRecursively(dir: string, fileList: string[] = []): string[] {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      readDirectoryRecursively(filePath, fileList);
    } else if (filePath.endsWith('.svg')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}
