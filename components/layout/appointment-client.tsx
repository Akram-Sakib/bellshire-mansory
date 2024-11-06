'use client';

import CalendarCard from '@/components/cards/calendar-card';
import ClockIcon from '@/components/svg-icons/clock-icon';
import { Button } from '@/components/ui/button';
import { getUser } from '@/lib/user';
import AppointmentService from '@/services/appointment-service';

const AppointmentClient = () => {
  const { create, createIsPending } = AppointmentService.createAppointment();
  const user = getUser();

  const handleCreateAppointment = () => {
    create({
      name: user?.first_name + ' ' + user?.last_name,
      date: '2024-01-06',
      slot: 1,
      description: 'Appointment Description',
      userId: user!._id
    });
  };

  return (
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
      <div className="dark:gradiant-bg relative col-span-2 row-span-4 rounded-[20px] border-none bg-custom-radial-light dark:bg-custom-radial dark:shadow-custom">
        <CalendarCard />
      </div>
      <div className="dark:gradiant-bg relative col-span-2 row-span-4 rounded-[20px] border-none bg-custom-radial-light dark:bg-custom-radial dark:shadow-custom">
        <div className="flex h-full w-full flex-col justify-between gap-4 p-5">
          <div className="space-y-6">
            <div className="flex items-center gap-x-2">
              <ClockIcon />
              <h2 className="font-poppins text-sm text-lightHeading dark:text-calendarScheduleText">
                Heures disponibles
              </h2>
            </div>
            <h4 className="font-poppins text-2xl font-medium text-lightHeading md:text-[32px] dark:text-white">
              10 Heures
            </h4>
          </div>
          <div className="space-y-4">
            <Button
              variant={'default'}
              className="h-auto w-full rounded-full py-3 font-roboto text-white"
              onClick={handleCreateAppointment}
              disabled={createIsPending}
            >
              Réserver maintenant
            </Button>
            <Button
              variant={'secondary'}
              className="h-auto w-full rounded-full py-3 font-roboto text-lightHeading dark:text-white"
            >
              En savoir plus
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentClient;
