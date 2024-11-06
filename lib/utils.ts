import { type ClassValue, clsx } from 'clsx';
import { deleteCookie } from 'cookies-next';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const signOut = () => {
  deleteCookie('accessToken');
  deleteCookie('user');
  if (typeof window !== 'undefined') {
    window.location.href = '/'; // Redirect to the "/" route
  }
};

export const thousandCommaSeparator = (number: number) => {
  return number.toLocaleString('en-US');
};
