'use client';
import { StarFilledIcon } from '@radix-ui/react-icons';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './header-tabs';
import Image from 'next/image';
import * as React from 'react';

interface HeaderProps {
  icon?: React.JSX.Element;
  tabs?: boolean;
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
        <TabsList className="w-full relative flex flex-col items-center justify-center border-none">
          <div className="w-[90%] mx-auto flex flex-col lg:flex-row items-center lg:justify-between space-y-4">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-start lg:max-w-[50%] max-w-[60%] space-y-4 text-white">
              <div className="text-md">{category}</div>
              <div className="text-4xl lg:text-5xl font-reckless">{title}</div>
              <div className="text-md">{desc}</div>
            </div>
            <div className="rounded-full p-4">
              <div className="flex items-center justify-center w-28 h-28 lg:w-48 lg:h-48">
                {icon ? (
                  icon
                ) : (
                  <Image src={src} width={400} height={400} alt="Header Icon" />
                )}
              </div>
            </div>
          </div>
          {tabs && (
            <div className="absolute bottom-0 left-6 lg:pl-8 grid grid-cols-2">
              <TabsTrigger value="gold">
                <StarFilledIcon className="mr-1 text-[gold]" /> Gold Members
              </TabsTrigger>
              <TabsTrigger value="standard">Standard Members</TabsTrigger>
            </div>
          )}
        </TabsList>

        {tabs && (
          <>
            <TabsContent value="gold">Gold List</TabsContent>
            <TabsContent value="standard">Standard List</TabsContent>
          </>
        )}
      </Tabs>
    </>
  );
}
