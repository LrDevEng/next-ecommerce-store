import { cookies } from 'next/headers';
import { parseJson } from './parsers';

// Cookie names
export const cartCookieName = 'cart';

// Function to get cookie value
export async function getCookieValue(name) {
  const cookie = (await cookies()).get(name);

  if (!cookie) return undefined;

  return parseJson(cookie.value);
}

// Function to set cookie
export async function setCookie(name, value) {
  (await cookies()).set(name, JSON.stringify(value), {
    httpOnly: true,
    secure: true,
  });
}
