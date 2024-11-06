'use client';

import CalendarCard from '@/components/cards/calendar-card';

import UsersCard from '../cards/users-card';
import AdminNewsCard from '../cards/admin-news-card';
import AdminConciergerieCard from '../cards/admin-conciergerie-card';
import AdminPdfCard from '../cards/admin-pdf-card';
const AdminCLient = () => {
  return (
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
      <UsersCard />
      <div className="dark:gradiant-bg relative col-span-2 row-span-4 rounded-[20px] border-none bg-custom-radial-light dark:bg-custom-radial dark:shadow-custom">
        <CalendarCard />
      </div>
      <AdminNewsCard />
      <AdminConciergerieCard />
      <AdminPdfCard />
    </div>
  );
};

export default AdminCLient;
