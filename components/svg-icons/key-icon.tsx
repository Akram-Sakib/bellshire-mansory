import { cn } from '@/lib/utils';
import { FC } from 'react';

interface KeyIconProps {
  className?: string;
}

const KeyIcon: FC<KeyIconProps> = ({ className }) => {
  return (
    <svg
      width="21"
      height="24"
      viewBox="0 0 21 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        'size-5 h-4 w-4 flex-none fill-lightHeading 2xl:h-5 2xl:w-5 dark:fill-calendarScheduleText',
        className
      )}
    >
      <ellipse
        cx="7.16663"
        cy="15"
        rx="2.5"
        ry="3"
        fill="#B9B9B9"
        stroke="#B9B9B9"
        strokeWidth="2"
        className="fill-lightHeading dark:fill-calendarScheduleText"
      />
      <path
        d="M15.8516 6.14018C16.2052 5.71591 16.1478 5.08534 15.7236 4.73178C15.2993 4.37821 14.6687 4.43554 14.3152 4.85982L15.8516 6.14018ZM15.5652 9.64018L16.2053 10.4084L17.7418 9.12804L17.1016 8.35982L15.5652 9.64018ZM13.4167 7.5L12.6485 6.85982L12.6485 6.85982L13.4167 7.5ZM13.8985 9.64018L14.5387 10.4084L16.0751 9.12804L15.4349 8.35982L13.8985 9.64018ZM8.06515 12.3598C7.71159 12.7841 7.76891 13.4147 8.19319 13.7682C8.61747 14.1218 9.24803 14.0645 9.6016 13.6402L8.06515 12.3598ZM13.4818 11.1402L14.122 11.9084L15.6584 10.628L15.0183 9.85982L13.4818 11.1402ZM15.0183 7.14018L15.8516 6.14018L14.3152 4.85982L13.4818 5.85982L15.0183 7.14018ZM13.4818 7.14018L15.5652 9.64018L17.1016 8.35982L15.0183 5.85982L13.4818 7.14018ZM14.1849 8.14018L15.0183 7.14018L13.4818 5.85982L12.6485 6.85982L14.1849 8.14018ZM12.6485 8.14018L13.8985 9.64018L15.4349 8.35982L14.1849 6.85982L12.6485 8.14018ZM9.6016 13.6402L13.3516 9.14018L11.8152 7.85982L8.06515 12.3598L9.6016 13.6402ZM13.3516 9.14018L14.1849 8.14018L12.6485 6.85982L11.8152 7.85982L13.3516 9.14018ZM11.8152 9.14018L13.4818 11.1402L15.0183 9.85982L13.3516 7.85982L11.8152 9.14018Z"
        fill="#B9B9B9"
        className="fill-lightHeading dark:fill-calendarScheduleText"
      />
    </svg>
  );
};

export default KeyIcon;
