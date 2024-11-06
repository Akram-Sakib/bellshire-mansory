import { IUser } from '@/types';
import { getCookie } from 'cookies-next';

export const getUser = (): IUser | null => {
  let user;
  const stringifiedUser = getCookie('user');
  if (stringifiedUser) user = JSON.parse(stringifiedUser);

  return user;
};
