import { getUser } from '@/lib/user';
import { thousandCommaSeparator } from '@/lib/utils';
import AppointmentService from '@/services/appointment-service';
import KeyIcon from '../svg-icons/key-icon';
import PenIcon from '../svg-icons/pen-icon';
import UserIcon from '../svg-icons/user-icon';
import XRedIcon from '../svg-icons/x-red-icon';
import { Button } from '../ui/button';

const data = [
  {
    id: 1,
    name: 'Thomas',
    title: 'Mansonary elite',
    amount: 1524.698,
    hours: 250
  },
  {
    id: 2,
    name: 'Mathieu',
    title: 'Mansonary elite',
    amount: 314.108,
    hours: 174
  },
  {
    id: 3,
    name: 'Dylan',
    title: 'Mansonary',
    amount: 341.948,
    hours: 110
  }
];

const UsersCard = () => {
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
    <div className="dark:gradiant-bg relative col-span-2 row-span-4 rounded-[20px] border-none bg-custom-radial-light dark:bg-custom-radial dark:shadow-custom">
      <div className="flex h-full w-full flex-col justify-between gap-4 p-5">
        <div className="flex items-center gap-x-2">
          <UserIcon />
          <h2 className="font-poppins text-sm text-lightHeading dark:text-calendarScheduleText">
            Gérer les membres
          </h2>
        </div>
        <div className="font-poppins text-xs text-lightHeading md:text-sm dark:text-calendarScheduleText">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-x-2"
            >
              <p className="basis-[20%]">{item.name}</p>
              <p className="basis-[25%]">{item.title}</p>
              <p className="basis-[15%]">
                ${thousandCommaSeparator(item.amount)}
              </p>
              <p className="basis-[15%]">{item.hours}h</p>
              <div className="flex basis-[25%] items-center justify-end gap-x-2 ">
                <Button variant={'none'} className="p-1">
                  <KeyIcon />
                </Button>
                <Button variant={'none'} className="p-1">
                  <PenIcon />
                </Button>
                <Button variant={'none'} className="p-1">
                  <XRedIcon />
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          <Button
            variant={'default'}
            className="h-auto w-full rounded-full py-3 font-roboto text-white"
            onClick={handleCreateAppointment}
            disabled={createIsPending}
          >
            Voir plus
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UsersCard;
