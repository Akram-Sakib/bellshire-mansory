import { cn } from '@/lib/utils';
import React, { FC } from 'react';

interface XRedIcon {
  className?: string;
}

const XRedIcon: FC<XRedIcon> = ({ className }) => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('size-5 h-4 w-4 flex-none 2xl:h-5 2xl:w-5', className)}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18 10C18 14.1421 14.6421 17.5 10.5 17.5C6.35786 17.5 3 14.1421 3 10C3 5.85786 6.35786 2.5 10.5 2.5C14.6421 2.5 18 5.85786 18 10ZM6.45956 14.0404C6.06904 13.6499 6.06904 13.0168 6.45956 12.6262L9.08579 10L6.45956 7.37377C6.06903 6.98325 6.06904 6.35008 6.45956 5.95956C6.85008 5.56904 7.48325 5.56903 7.87377 5.95956L10.5 8.58579L13.1262 5.95956C13.5168 5.56903 14.1499 5.56904 14.5404 5.95956C14.931 6.35008 14.931 6.98325 14.5404 7.37377L11.9142 10L14.5404 12.6262C14.931 13.0168 14.931 13.6499 14.5404 14.0404C14.1499 14.431 13.5168 14.431 13.1262 14.0404L10.5 11.4142L7.87377 14.0404C7.48325 14.431 6.85008 14.431 6.45956 14.0404Z"
        fill="#ED9D9D"
      />
    </svg>
  );
};

export default XRedIcon;
