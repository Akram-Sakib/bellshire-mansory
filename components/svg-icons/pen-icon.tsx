import { cn } from '@/lib/utils';
import { FC } from 'react';

interface PenIcon {
  className?: string;
}

const PenIcon: FC<PenIcon> = ({ className }) => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        'size-5 h-4 w-4 flex-none fill-lightHeading 2xl:h-5 2xl:w-5 dark:fill-calendarScheduleText',
        className
      )}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.959 8.87436L16.3333 7.5C16.5679 7.2655 16.6851 7.14825 16.7696 7.03605C17.3056 6.32383 17.3056 5.34284 16.7696 4.63063C16.6851 4.51842 16.5679 4.40117 16.3333 4.16667C16.0988 3.93217 15.9816 3.81492 15.8694 3.73047C15.1572 3.19442 14.1762 3.19442 13.464 3.73047C13.3518 3.81491 13.2345 3.93216 13 4.16664L13 4.16667L11.6064 5.56029C12.4033 6.94053 13.56 8.08831 14.959 8.87436ZM10.1518 7.01488L4.68973 12.477C4.26467 12.902 4.05214 13.1145 3.9124 13.3756C3.77267 13.6367 3.71372 13.9315 3.59583 14.5209L3.1471 16.7646C3.08058 17.0972 3.04732 17.2635 3.14193 17.3581C3.23654 17.4527 3.40284 17.4194 3.73545 17.3529H3.73545L5.9791 16.9042C6.56855 16.7863 6.86328 16.7274 7.12437 16.5876C7.38547 16.4479 7.598 16.2354 8.02306 15.8103L13.5006 10.3327C12.1528 9.48197 11.0106 8.34754 10.1518 7.01488Z"
        fill="#B9B9B9"
        className="fill-lightHeading dark:fill-calendarScheduleText"
      />
    </svg>
  );
};

export default PenIcon;
