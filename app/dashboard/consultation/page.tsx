import AppointmentClient from '@/components/layout/appointment-client';
import PageContainer from '@/components/layout/page-container';
import Transition from '@/components/layout/transition';

export default function page() {
  return (
    <PageContainer scrollable={true}>
      <div className="pb-20">
        <Transition>
          <AppointmentClient />
        </Transition>
      </div>
    </PageContainer>
  );
}
