'use client';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { Tabs, TabsList, TabsTrigger } from './header-tabs';
import Image from 'next/image';
import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface HeaderProps {
  icon?: React.JSX.Element;
  title: string;
  category: string;
  desc: string;
  src?: any;
  navigate?: boolean;
}

export function Header({
  icon,
  title,
  category,
  desc,
  src,
  navigate,
}: HeaderProps) {
  return (
    <>
      <Tabs defaultValue="gold" className="w-full">
        <TabsList
          className={cn(
            'relative flex w-full flex-col items-center justify-center border-none'
          )}
        >
          <div className="mx-auto flex w-[90%] flex-col items-center space-y-4 lg:flex-row lg:justify-between">
            <div className="flex max-w-[60%] flex-col items-center space-y-4 text-center text-white lg:max-w-[50%] lg:items-start lg:text-start">
              <div className="text-md">{category}</div>
              <div className="font-reckless text-4xl lg:text-5xl">{title}</div>
              <div className="text-md">{desc}</div>
            </div>
            <div className="rounded-full p-4">
              <div className="flex h-28 w-28 items-center justify-center lg:h-48 lg:w-48">
                {icon ? (
                  icon
                ) : (
                  <Image src={src} width={400} height={400} alt="Header Icon" />
                )}
              </div>
            </div>
          </div>

          {navigate && (
            <Link
              href={'/'}
              className="absolute bottom-0 left-6 grid grid-cols-2 lg:pl-8 "
            >
              <TabsTrigger value="">
                <ArrowLeftIcon className="mr-1 text-foreground" />
                Home
              </TabsTrigger>
            </Link>
          )}
        </TabsList>
      </Tabs>
    </>
  );
}
