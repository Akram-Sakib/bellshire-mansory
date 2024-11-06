'use client';

import React from 'react';
import ThemeProvider from './ThemeToggle/theme-provider';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {}
        }
      })
  );

  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}
