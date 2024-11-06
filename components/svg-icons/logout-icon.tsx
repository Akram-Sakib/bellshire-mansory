import { cn } from '@/lib/utils';
import { FC } from 'react';

interface LogoutIconProps {
  className?: string;
}

const LogoutIcon: FC<LogoutIconProps> = ({ className }) => {
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
        d="M16.8 2H14.2C11 2 9 4 9 7.2V11.25H15.25C15.66 11.25 16 11.59 16 12C16 12.41 15.66 12.75 15.25 12.75H9V16.8C9 20 11 22 14.2 22H16.79C19.99 22 21.99 20 21.99 16.8V7.2C22 4 20 2 16.8 2Z"
        fill="#8B8B8B"
      />
      <path
        d="M4.56 11.25L6.63 9.18C6.78 9.03 6.85 8.84 6.85 8.65C6.85 8.46 6.78 8.26 6.63 8.12C6.34 7.83 5.86 7.83 5.57 8.12L2.22 11.47C1.93 11.76 1.93 12.24 2.22 12.53L5.57 15.88C5.86 16.17 6.34 16.17 6.63 15.88C6.92 15.59 6.92 15.11 6.63 14.82L4.56 12.75H9V11.25H4.56Z"
        fill="#8B8B8B"
      />
    </svg>
  );
};

export default LogoutIcon;
