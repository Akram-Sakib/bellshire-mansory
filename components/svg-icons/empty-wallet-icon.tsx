import { cn } from '@/lib/utils';
import { FC } from 'react';

interface EmptyWalletIconProps {
  className?: string;
}

const EmptyWalletIcon: FC<EmptyWalletIconProps> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('ml-3 size-5 h-4 w-4 flex-none 2xl:h-5 2xl:w-5', className)}
    >
      <path
        d="M14.85 3.94999V7.74999H13.35V3.94999C13.35 3.67999 13.11 3.54999 12.95 3.54999C12.9 3.54999 12.85 3.55999 12.8 3.57999L4.87 6.56999C4.34 6.76999 4 7.26999 4 7.83999V8.50999C3.09 9.18999 2.5 10.28 2.5 11.51V7.83999C2.5 6.64999 3.23 5.58999 4.34 5.16999L12.28 2.16999C12.5 2.08999 12.73 2.04999 12.95 2.04999C13.95 2.04999 14.85 2.85999 14.85 3.94999Z"
        className="fill-lightHeading dark:fill-calendarScheduleText"
      />
      <path
        d="M21.5 14.5V15.5C21.5 15.77 21.29 15.99 21.01 16H19.55C19.02 16 18.54 15.61 18.5 15.09C18.47 14.78 18.59 14.49 18.79 14.29C18.97 14.1 19.22 14 19.49 14H21C21.29 14.01 21.5 14.23 21.5 14.5Z"
        className="fill-lightHeading dark:fill-calendarScheduleText"
      />
      <path
        d="M19.48 12.95H20.5C21.05 12.95 21.5 12.5 21.5 11.95V11.51C21.5 9.44 19.81 7.75 17.74 7.75H6.26C5.41 7.75 4.63 8.03 4 8.51C3.09 9.19 2.5 10.28 2.5 11.51V18.24C2.5 20.31 4.19 22 6.26 22H17.74C19.81 22 21.5 20.31 21.5 18.24V18.05C21.5 17.5 21.05 17.05 20.5 17.05H19.63C18.67 17.05 17.75 16.46 17.5 15.53C17.29 14.77 17.54 14.04 18.04 13.55C18.41 13.17 18.92 12.95 19.48 12.95ZM14 12.75H7C6.59 12.75 6.25 12.41 6.25 12C6.25 11.59 6.59 11.25 7 11.25H14C14.41 11.25 14.75 11.59 14.75 12C14.75 12.41 14.41 12.75 14 12.75Z"
        className="fill-lightHeading dark:fill-calendarScheduleText"
      />
    </svg>
  );
};

export default EmptyWalletIcon;