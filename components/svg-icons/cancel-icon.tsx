import { cn } from '@/lib/utils';
import { FC } from 'react';

interface CancelIconProps {
  className?: string;
}

const CancelIcon: FC<CancelIconProps> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        'ml-3 size-5 h-4 w-4 flex-none fill-lightHeading 2xl:h-5 2xl:w-5 dark:fill-calendarScheduleText',
        className
      )}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM17.1296 15.7154C17.8868 14.6717 18.3333 13.388 18.3333 12C18.3333 8.5022 15.4978 5.66667 12 5.66667C10.612 5.66667 9.32827 6.11317 8.28463 6.87039L17.1296 15.7154ZM6.87041 8.2846L15.7154 17.1296C14.6718 17.8868 13.388 18.3333 12 18.3333C8.5022 18.3333 5.66667 15.4978 5.66667 12C5.66667 10.612 6.11318 9.32824 6.87041 8.2846ZM12 3.66667C7.39763 3.66667 3.66667 7.39763 3.66667 12C3.66667 16.6024 7.39763 20.3333 12 20.3333C16.6024 20.3333 20.3333 16.6024 20.3333 12C20.3333 7.39763 16.6024 3.66667 12 3.66667Z"
        fill="#E6E6E6"
        className="fill-lightHeading dark:fill-calendarScheduleText"
      />
    </svg>
  );
};

export default CancelIcon;
