import * as React from 'react';
import type { Metadata } from 'next';
import '@/styles/globals.css';
import { siteConfig } from '@/config/site';
import { fontMono, fontRoboto, fontRoobert, fontReckless } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { ThemeProvider } from '@/components/providers';
import { ThemeToggle } from '@/components/theme';
import { Toaster } from '@/components/toast-layout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,

  // themeColor: [
  //   { media: "(prefers-color-scheme: light)", color: "white" },
  //   { media: "(prefers-color-scheme: dark)", color: "black" },
  // ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-secondary font-roobert font-medium antialiased',
          fontRoboto.variable,
          fontMono.variable,
          fontRoobert.variable,
          fontReckless.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="container relative pt-14">
            {children}
            <div className="flex w-full justify-between py-8">
              <p className="text-sm">
                <Link href={'/terms'} className=" underline">
                  Terms and Conditions
                </Link>{' '}
              </p>
              <ThemeToggle />
            </div>
          </main>

          <TailwindIndicator />
        </ThemeProvider>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
