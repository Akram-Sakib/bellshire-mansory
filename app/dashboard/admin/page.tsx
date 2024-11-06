'use client';
import AdminCLient from '@/components/layout/admin-client';
import PageContainer from '@/components/layout/page-container';
import Transition from '@/components/layout/transition';
import { getUser } from '@/lib/user';
import { redirect } from 'next/navigation';

export default function page() {
  const isAdmin = getUser()?.role === 'admin';

  if (!isAdmin) {
    redirect('/dashboard');
  }

  return (
    <PageContainer scrollable={true}>
      <div className="pb-20">
        <Transition>
          <AdminCLient />
        </Transition>
      </div>
    </PageContainer>
  );
}
