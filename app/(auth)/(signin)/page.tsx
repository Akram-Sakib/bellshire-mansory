import UserAuthForm from '@/components/forms/user-auth-form';
import { getCookie } from 'cookies-next';
import { Metadata } from 'next';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Login | Bellshire Mansory'
};

export default async function AuthenticationPage() {
  const token = getCookie('accessToken');

  if (token) redirect('/dashboard');

  return (
    <div className="relative h-screen flex-col items-center justify-center bg-background">
      <div className="flex h-full items-center p-4 text-lightHeading lg:p-8 dark:text-white">
        <div
          className="login-gradiant-bg relative z-10 mx-auto box-border flex w-full flex-col justify-center space-y-6 p-10 sm:w-[450px]"
          style={{
            background:
              'radial-gradient(117.2% 352.94% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0) 100%)',
            boxShadow: '0px 4px 25px 0px #00000026'
          }}
        >
          <div className="flex w-full items-center gap-x-2">
            <Image
              src="/white-logo.svg"
              width={40}
              height={40}
              alt="white-logo"
            />
            <h1 className="text-xl font-medium tracking-tight text-background text-lightHeading dark:text-heading">
              Bellshire Mansory
            </h1>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <UserAuthForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
