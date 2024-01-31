'use client';
import { StarFilledIcon } from '@radix-ui/react-icons';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './header-tabs';
import React from 'react';

interface HeaderProps {
  icon: React.JSX.Element;
  tabs?: boolean;
  title: string;
  category: string;
  desc: string;
}

export function Header({ icon, tabs, title, category, desc }: HeaderProps) {
  return (
    <>
      <Tabs defaultValue="gold" className="w-full">
        <TabsList className="w-full relative flex flex-col items-center justify-center border-none">
          <div className="w-[90%] mx-auto flex flex-col lg:flex-row items-center lg:justify-between space-y-4 -translate-y-5">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-start lg:max-w-[50%] max-w-[60%] space-y-2 text-white">
              <div className="text-md">{category}</div>
              <div className="text-3xl lg:text-4xl font-reckless">{title}</div>
              <div className="text-md">{desc}</div>
            </div>
            <div className="rounded-full bg-primary-foreground p-4">
              <div className="flex items-center justify-center w-10 h-10 lg:w-24 lg:h-24">
                {icon}
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
