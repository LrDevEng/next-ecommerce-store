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
