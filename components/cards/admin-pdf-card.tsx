import { getUser } from '@/lib/user';
import AppointmentService from '@/services/appointment-service';
import DocumentIcon2 from '../svg-icons/document-icon-2';
import PenIcon from '../svg-icons/pen-icon';
import XRedIcon from '../svg-icons/x-red-icon';
import { Button } from '../ui/button';
import { LiaPlusSolid } from 'react-icons/lia';

const data = [
  {
    id: 1,
    name: '%pdf_name%'
  },
  {
    id: 2,
    name: '%pdf_name%'
  },
  {
    id: 3,
    name: '%pdf_name%'
  }
];

const AdminPdfCard = () => {
  const { create, createIsPending } = AppointmentService.createAppointment();
  const user = getUser();

  const handleCreateAppointment = () => {};

  return (
    <div className="dark:gradiant-bg relative col-span-2 row-span-4 rounded-[20px] border-none bg-custom-radial-light dark:bg-custom-radial dark:shadow-custom">
      <div className="flex h-full w-full flex-col justify-between gap-4 p-5">
        <div className="flex justify-between">
          <div className="flex items-center gap-x-2">
            <DocumentIcon2 />
            <h2 className="font-poppins text-sm text-lightHeading dark:text-calendarScheduleText">
              Gérer les pdf
            </h2>
          </div>
          <LiaPlusSolid
            size={20}
            className="cursor-pointer fill-lightHeading dark:fill-[#b9b9b9]"
          />
        </div>
        <div className="font-poppins text-xs text-lightHeading md:text-sm dark:text-calendarScheduleText">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-x-2"
            >
              <p className="basis-1/2">{item.name}</p>
              <div className="flex basis-1/2 items-center justify-end gap-x-2 ">
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

export default AdminPdfCard;
