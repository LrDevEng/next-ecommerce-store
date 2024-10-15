import sjson from 'secure-json-parse';

// Secure json parser
export function parseJson(json: any): any {
  if (!json) return undefined;
  try {
    return sjson(json);
  } catch {
    return undefined;
  }
}

// Return full file name (file name + extionson) if given file name and file location (directory)
// export async function getFullFileName(fileName: string, dir: string) {
//   const files = await fs.readdir(dir);
//   return files.find((file) => file.startsWith(fileName));
// }

// Cents to euros
export function centsToEuros(cents: number) {
  let centsAsString = cents.toString();
  centsAsString = centsAsString.padStart(3, '0');
  return `${centsAsString.slice(0, -2)},${centsAsString.slice(-2)}`;
}
