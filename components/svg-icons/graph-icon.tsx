import { cn } from '@/lib/utils';
import { FC } from 'react';

interface GraphIconProps {
  className?: string;
}

const GraphIcon: FC<GraphIconProps> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('size-5 h-4 w-4 flex-none 2xl:h-5 2xl:w-5', className)}
    >
      <path
        d="M21.67 6.95003C21.03 4.78003 19.22 2.97003 17.05 2.33003C15.4 1.85003 14.26 1.89003 13.47 2.48003C12.52 3.19003 12.41 4.47003 12.41 5.38003V7.87003C12.41 10.33 13.53 11.58 15.73 11.58H18.6C19.5 11.58 20.79 11.47 21.5 10.52C22.11 9.74003 22.16 8.60003 21.67 6.95003Z"
        className="fill-lightHeading dark:fill-calendarScheduleText"
      />
      <path
        d="M18.91 13.36C18.65 13.06 18.27 12.89 17.88 12.89H14.3C12.54 12.89 11.11 11.46 11.11 9.70003V6.12003C11.11 5.73003 10.94 5.35003 10.64 5.09003C10.35 4.83003 9.95002 4.71003 9.57002 4.76003C7.22002 5.06003 5.06002 6.35003 3.65002 8.29003C2.23002 10.24 1.71002 12.62 2.16002 15C2.81002 18.44 5.56002 21.19 9.01002 21.84C9.56002 21.95 10.11 22 10.66 22C12.47 22 14.22 21.44 15.71 20.35C17.65 18.94 18.94 16.78 19.24 14.43C19.29 14.w04 19.17 13.65 18.91 13.36Z"
        className="fill-lightHeading dark:fill-calendarScheduleText"
      />
    </svg>
  );
};

export default GraphIcon;
