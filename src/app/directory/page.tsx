'use client';
import * as React from 'react';
import { MembersList } from '@/components/lists';
import { DataTableColumnHeader } from '@/components/tables';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Icons } from '@/components/icons';
import { type ColumnDef } from '@tanstack/react-table';
import { CuratedMembersInfo } from '@/types';

function Directory() {
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
          <DataTableColumnHeader column={column} title="Created at" />
        ),
        accessorKey: 'createdAt',
      },
    ],
    []
  );

  const data = [
    {
      id: 'uuid',
      firstName: 'John',
      lastName: 'Doe',
      province: 'Lagos Island',
      occupation: 'Teacher',
      gender: 'male',
      createdAt: 'dhbud',
    },
    {
      id: 'uuid2',
      firstName: 'Ben',
      lastName: 'Sharp',
      province: 'Ikeja',
      occupation: 'Engineer',
      gender: 'female',
      createdAt: 'dhbud',
    },
    {
      id: 'uuid3',
      firstName: 'Steven',
      lastName: 'Segal',
      province: 'Abuja',
      occupation: 'Doctor',
      gender: 'male',
      createdAt: 'dhbud',
    },
  ];

  return <MembersList data={data} columns={columns} />;
}

export default Directory;
