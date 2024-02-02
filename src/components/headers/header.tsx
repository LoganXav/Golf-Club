'use client';
import { ArrowLeftIcon, StarFilledIcon } from '@radix-ui/react-icons';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './header-tabs';
import Image from 'next/image';
import * as React from 'react';
import Link from 'next/link';

interface HeaderProps {
  icon?: React.JSX.Element;
  tabs?: 'single' | 'double';
  title: string;
  category: string;
  desc: string;
  src?: any;
}

export function Header({
  icon,
  tabs,
  title,
  category,
  desc,
  src,
}: HeaderProps) {
  return (
    <>
      <Tabs defaultValue="gold" className="w-full">
        <TabsList className="relative flex w-full flex-col items-center justify-center border-none">
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
          {tabs === 'double' ? (
            <div className="absolute bottom-0 left-6 grid grid-cols-2 lg:pl-8">
              <TabsTrigger value="gold">
                <StarFilledIcon className="mr-1 text-[gold]" /> Gold Members
              </TabsTrigger>
              <TabsTrigger value="standard">Standard Members</TabsTrigger>
            </div>
          ) : tabs === 'single' ? (
            <Link
              href={'/'}
              className="absolute bottom-0 left-6 grid grid-cols-2 lg:pl-8"
            >
              <TabsTrigger value="">
                <ArrowLeftIcon className="mr-1 text-foreground" /> Back
              </TabsTrigger>
            </Link>
          ) : null}
        </TabsList>

        {tabs === 'double' && (
          <>
            <TabsContent value="gold">Gold List</TabsContent>
            <TabsContent value="standard">Standard List</TabsContent>
          </>
        )}
      </Tabs>
    </>
  );
}
