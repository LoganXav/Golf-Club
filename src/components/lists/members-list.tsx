'use client';
import * as React from 'react';
import { TableHeader, Tabs, TabsContent } from '@/components/headers';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { DataTable } from '@/components/tables';
import { type ColumnDef } from '@tanstack/react-table';
import { CuratedMembersInfo } from '@/types';
import { MemberCard } from '../cards';

import { DataTableColumnHeader } from '@/components/tables';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Icons } from '@/components/icons';
import { FormDTO } from '@/lib/schema';
import { format } from 'date-fns';

interface Props {
  data: FormDTO[];
}
export function MembersList({ data }: Props) {
  // Memoize the columns so they don't re-render on every render
  const columns = React.useMemo<ColumnDef<CuratedMembersInfo, unknown>[]>(
    () => [
      {
        accessorKey: 'firstName',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Name" />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback className="p-2">
                  {<Icons.person />}
                </AvatarFallback>
              </Avatar>
              <span>
                {row.original.firstName} {row.original.lastName}
              </span>
            </div>
          );
        },
      },
      {
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Province" />
        ),
        accessorKey: 'province',
      },
      {
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Occupation" />
        ),
        accessorKey: 'occupation',
      },
      {
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Gender" />
        ),
        accessorKey: 'gender',
      },
      {
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Joined date" />
        ),
        accessorKey: 'createdAt',
        cell: ({ row }) => {
          const date = new Date(row.original.created_at);
          const formattedDate = format(date, 'MMMM do, yyyy');
          return formattedDate;
        },
      },
    ],
    []
  );

  // TODO: use an object with 2 propertis for each table's data
  const [filteredData, setFilteredData] = React.useState(data);
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredResults = data.filter((item) =>
      item.firstName.toLowerCase().includes(searchTerm)
    );

    setFilteredData(filteredResults);
  };

  return (
    <>
      <Tabs defaultValue="premium" className="w-full">
        <TableHeader />
        <div className="flex w-full flex-col overflow-hidden rounded-b-md bg-primary text-primary lg:flex-row">
          <input
            className="min-h-12 flex-1 bg-primary-foreground px-4 outline-none placeholder:text-primary lg:px-12"
            placeholder="Find a member..."
            value={searchTerm}
            onChange={handleSearch}
          />

          <Select>
            <SelectTrigger className="w-full rounded-none border-none bg-primary-background outline-none lg:w-1/6">
              <SelectValue placeholder="Filter by"></SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Name">Name</SelectItem>
              <SelectItem value="Province">Province</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <>
          <TabsContent value="premium">
            <div className="mt-8 hidden lg:flex">
              <DataTable data={filteredData} columns={columns} />
            </div>
            <div className="mt-8 flex flex-col gap-4 lg:hidden">
              {filteredData?.map((member, idx) => (
                <MemberCard data={member} key={idx} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="standard">
            <div className="mt-8 hidden lg:flex">
              <DataTable data={filteredData} columns={columns} />
            </div>
            <div className="mt-8 flex flex-col gap-4 lg:hidden">
              {filteredData?.map((member, idx) => (
                <MemberCard data={member} key={idx} />
              ))}
            </div>
          </TabsContent>
        </>
      </Tabs>
    </>
  );
}
