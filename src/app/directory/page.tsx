import * as React from 'react';
import { StarFilledIcon } from '@radix-ui/react-icons';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/headers';
import Image from 'next/image';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

function Directory() {
  return (
    <>
      <Tabs defaultValue="premium" className="w-full">
        <TabsList className="relative flex w-full flex-col items-center justify-center rounded-b-none border-none">
          <div className="mx-auto flex w-[90%] flex-col items-center space-y-4 lg:flex-row lg:justify-between">
            <div className="flex max-w-[85%] flex-col items-center space-y-4 text-center text-white lg:max-w-[50%] lg:items-start lg:text-start">
              <div className="text-md">Your one stop registration portal</div>
              <div className="font-reckless text-4xl lg:text-5xl">
                Golf Membership
              </div>
              <div className="text-md">
                Discover the world of joining a community filled with golf
                lovers, With services that suits your needs.
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
        <div className="flex w-full flex-col overflow-hidden rounded-b-md bg-primary text-primary lg:flex-row">
          <input
            className="min-h-12 flex-1 bg-primary-foreground px-4 outline-none placeholder:text-primary lg:px-12"
            placeholder="Find a member..."
          />
          <Select>
            <SelectTrigger className="text-muted-foreground w-full rounded-none border-none bg-primary-background outline-none lg:w-1/6">
              <SelectValue placeholder="Sort by"></SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Most Popular">Most Popular</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <>
          <TabsContent value="premium">
            <div className="mt-8 flex h-[20rem] w-full items-center justify-center rounded-md border-primary bg-success">
              Premium List
            </div>
          </TabsContent>
          <TabsContent value="standard">
            <div className="mt-8 flex h-[20rem] w-full items-center justify-center rounded-md border-primary bg-destructive">
              Standard List
            </div>
          </TabsContent>
        </>
      </Tabs>
    </>
  );
}
export default Directory;
