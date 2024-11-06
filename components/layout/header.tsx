'use client';

import ThemeToggle from '@/components/layout/ThemeToggle/theme-toggle';
import { getUser } from '@/lib/user';
import { cn } from '@/lib/utils';
import NotificationIcon from '../svg-icons/notification-icon';
import { MobileSidebar } from './mobile-sidebar';
import { UserNav } from './user-nav';
import { format } from 'date-fns'; // Import format from date-fns

export default function Header() {
  const user = getUser();
  return (
    <header className="sticky inset-x-0 top-0 w-full">
      <nav className="items-center justify-between px-4 py-4 md:flex lg:py-7">
        <div className="hidden pl-6 md:block">
          <h5 className="font-poppins text-dark-bg dark:text-white">
            Hey, {user?.first_name}
          </h5>
          <p className="font-poppins text-sm text-lightHeading dark:text-muted">
            {format(new Date(), 'EEEE, MMMM d, yyyy')}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className={cn('block md:!hidden')}>
            <MobileSidebar />
          </div>
          <div className="flex items-center gap-2">
            <NotificationIcon className="h-6 w-6 cursor-pointer" />
            <ThemeToggle />
            <UserNav />
          </div>
        </div>
      </nav>
    </header>
  );
}
