import catchError from '@/lib/catch-error';
import fetcher from '@/lib/fetcher';
import { setCookie } from 'cookies-next';

interface ISignInProps {
  email: string;
  password: string;
}

const signIn = catchError(async (props: ISignInProps) => {
  const { data } = await fetcher.post('/auth/login', props);

  const token = data?.data?.accessToken; // EX: Bearer abcdefgh....
  const user = data?.data?.user;
  if (token) setCookie('accessToken', token);
  if (user) setCookie('user', user);

  return data;
});

const AuthService = { signIn };

export default AuthService;
