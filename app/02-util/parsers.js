import { promises as fs } from 'node:fs';
import sjson from 'secure-json-parse';

// Secure json parser
export function parseJson(json) {
  if (!json) return undefined;
  try {
    return sjson(json);
  } catch {
    return undefined;
  }
}

// Return full file name (file name + extionson) if given file name and file location (directory)
export async function getFullFileName(fileName, dir) {
  const files = await fs.readdir(dir);
  return files.find((file) => file.startsWith(fileName));
}
