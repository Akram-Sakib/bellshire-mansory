import { cn } from '@/lib/utils';
import { FC } from 'react';

interface MessageIconProps {
  className?: string;
}

const MessageIcon: FC<MessageIconProps> = ({ className }) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        'size-5 h-4 w-4 flex-none fill-lightHeading 2xl:h-5 2xl:w-5 dark:fill-calendarScheduleText',
        className
      )}
    >
      <path
        d="M5.5 8L5.5 2"
        stroke="#B9B9B9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="fill-lightHeading dark:fill-calendarScheduleText"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.7697 9.80446C3.59354 10.5072 3.5 11.2427 3.5 12C3.5 16.9706 7.52944 21 12.5 21H17C18.3978 21 19.0967 21 19.6481 20.7716C20.3831 20.4672 20.9672 19.8831 21.2716 19.1481C21.5 18.5967 21.5 17.8978 21.5 16.5V12C21.5 7.02944 17.4706 3 12.5 3C11.7427 3 11.0072 3.09354 10.3045 3.2697C10.7353 3.71885 11 4.32851 11 5C11 6.38071 9.88071 7.5 8.5 7.5H8V8C8 9.38071 6.88071 10.5 5.5 10.5C4.82851 10.5 4.21885 10.2353 3.7697 9.80446ZM9.5 10C8.94772 10 8.5 10.4477 8.5 11C8.5 11.5523 8.94772 12 9.5 12H15.5C16.0523 12 16.5 11.5523 16.5 11C16.5 10.4477 16.0523 10 15.5 10H9.5ZM12.5 14C11.9477 14 11.5 14.4477 11.5 15C11.5 15.5523 11.9477 16 12.5 16H15.5C16.0523 16 16.5 15.5523 16.5 15C16.5 14.4477 16.0523 14 15.5 14H12.5Z"
        fill="#B9B9B9"
        className="fill-lightHeading dark:fill-calendarScheduleText"
      />
      <path
        d="M2.5 5L8.5 5"
        stroke="#B9B9B9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="fill-lightHeading dark:fill-calendarScheduleText"
      />
    </svg>
  );
};

export default MessageIcon;
