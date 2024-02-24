'use client';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { Tabs, TabsList, TabsTrigger } from './header-tabs';
import Image from 'next/image';
import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { StarFilledIcon } from '@radix-ui/react-icons';

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

export function TableHeader() {
  return (
    <>
      <TabsList className="relative flex w-full flex-col items-center justify-center rounded-b-none border-none">
        <div className="mx-auto flex w-[90%] flex-col items-center space-y-4 lg:flex-row lg:justify-between">
          <div className="flex max-w-[85%] flex-col items-center space-y-4 text-center text-white lg:max-w-[50%] lg:items-start lg:text-start">
            <div className="text-md">Your one stop registration portal</div>
            <div className="font-reckless text-4xl lg:text-5xl">
              Golf Membership
            </div>
            <div className="text-md">
              Discover the world of joining a community filled with golf lovers,
              With services that suits your needs.
            </div>
          </div>
          <div className="rounded-full p-4">
            <div className="flex h-28 w-28 items-center justify-center lg:h-48 lg:w-48">
              <Image
                src="/golf-course.svg"
                width={400}
                height={400}
                alt="Header Icon"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-6 grid grid-cols-2 lg:pl-8">
          <TabsTrigger value="premium">
            <StarFilledIcon className="mr-1 text-[gold]" /> Premium Members
          </TabsTrigger>
          <TabsTrigger value="standard">Standard Members</TabsTrigger>
        </div>
      </TabsList>
    </>
  );
}
