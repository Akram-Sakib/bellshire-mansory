import { getUser } from '@/lib/user';
import AppointmentService from '@/services/appointment-service';
import DocumentIcon2 from '../svg-icons/document-icon-2';
import PenIcon from '../svg-icons/pen-icon';
import XRedIcon from '../svg-icons/x-red-icon';
import { Button } from '../ui/button';

const data = [
  {
    id: 1,
    tagName: 'News #1',
    title: 'Traditionnel'
  },
  {
    id: 2,
    tagName: 'News #2',
    title: 'Twitter'
  },
  {
    id: 3,
    tagName: 'News #3',
    title: 'Bellshire'
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
          <DocumentIcon2 />
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
              <p className="basis-1/3">{item.tagName}</p>
              <p className="basis-1/3">{item.title}</p>
              <div className="1/3 flex items-center justify-end gap-x-2 ">
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

export default AdminNewsCard;
