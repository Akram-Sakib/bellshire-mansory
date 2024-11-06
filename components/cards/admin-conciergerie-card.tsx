import { getUser } from '@/lib/user';
import AppointmentService from '@/services/appointment-service';
import { IoIosSend } from 'react-icons/io';
import MessageIcon from '../svg-icons/message-icon';
import XRedIcon from '../svg-icons/x-red-icon';
import { Button } from '../ui/button';

const data = [
  {
    id: 1,
    tagName: 'News #1',
    name: 'Mathieu',
    title: 'Mansonary elite'
  },
  {
    id: 2,
    tagName: 'News #2',
    name: 'Thomas',
    title: 'Mansonary elite'
  },
  {
    id: 3,
    tagName: 'News #3',
    name: 'Dylan',
    title: 'Mansonary'
  }
];

const AdminNewsCard = () => {
  const { create, createIsPending } = AppointmentService.createAppointment();
  const user = getUser();

  const handleCreateAppointment = () => {};

  return (
    <div className="dark:gradiant-bg relative col-span-2 row-span-4 rounded-[20px] border-none bg-custom-radial-light dark:bg-custom-radial dark:shadow-custom">
      <div className="flex h-full w-full flex-col justify-between gap-4 p-5">
        <div className="flex items-center gap-x-2">
          <MessageIcon />
          <h2 className="font-poppins text-sm text-lightHeading dark:text-calendarScheduleText">
            Gérer les news
          </h2>
        </div>
        <div className="font-poppins text-xs text-lightHeading md:text-sm dark:text-calendarScheduleText">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-x-2"
            >
              <p className="basis-[20%]">{item.tagName}</p>
              <p className="basis-[20%]">{item.name}</p>
              <p className="basis-[20%]">{item.title}</p>
              <div className="flex basis-[40%] items-center justify-end gap-x-2 ">
                <Button variant={'none'} className="p-1">
                  <IoIosSend className="h-3 w-3  fill-lightHeading lg:h-4  lg:w-4 dark:fill-calendarScheduleText" />
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

export default AdminNewsCard;
