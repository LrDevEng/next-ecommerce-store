'use server';

import { cookies } from 'next/headers';
import { parseJson } from './parsers';

// Function to get cookie value
export async function getCookieValue(name) {
  const cookie = (await cookies()).get(name);

  if (!cookie) return undefined;

  return parseJson(cookie.value);
}

// Function to set cookie
export async function setCookie(
  name,
  value,
  options = { httpOnly: true, secure: true },
) {
  (await cookies()).set(name, JSON.stringify(value), options);
}

// Function to delete cookie
export async function deleteCookie(name) {
  (await cookies()).delete(name);
}
