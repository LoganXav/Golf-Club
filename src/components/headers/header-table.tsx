"use client"
import { StarFilledIcon } from "@radix-ui/react-icons"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./header-tabs"
import { Icons } from "../icons"

export function HeaderTable() {
  return (
    <>
      <Tabs defaultValue="gold" className="w-full">
        <TabsList className="w-full relative flex flex-col items-center justify-center">
          <div className="w-[90%] mx-auto flex flex-col lg:flex-row items-center lg:justify-between space-y-4 -translate-y-5">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-start max-w-[50%] space-y-2 text-white">
              <div className="text-md">List</div>
              <div className="text-4xl font-reckless">What will you build?</div>
              <div className="text-md">
                Discover pre-built examples of Tines in action to accelerate
                your story building.
              </div>
            </div>
            <div className="rounded-full bg-primary-foreground p-4">
              <div className="flex items-center justify-center w-10 h-10 lg:w-24 lg:h-24">
                <Icons.box />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-6 lg:pl-8 grid grid-cols-2">
            <TabsTrigger value="gold">
              <StarFilledIcon className="mr-1 text-[gold]" /> Gold Members
            </TabsTrigger>
            <TabsTrigger value="standard">Standard Members</TabsTrigger>
          </div>
        </TabsList>

        <TabsContent value="gold">Gold List</TabsContent>
        <TabsContent value="standard">Standard List</TabsContent>
      </Tabs>
    </>
  )
}
