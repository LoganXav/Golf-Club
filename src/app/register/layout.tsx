'use client';
import { QueryClient, QueryClientProvider } from 'react-query';
import * as React from 'react';

interface SiteProps {
  children: React.ReactNode;
}

const layout = ({ children }: SiteProps) => {
  const queryClient = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </div>
  );
};

export default layout;
