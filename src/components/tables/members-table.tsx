import * as React from 'react';
import { DataTable } from '@/components/tables';
import { DataTableColumnHeader } from '@/components/tables';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Icons } from '@/components/icons';
import { FormDTO } from '@/lib/schema';
import { ColumnDef } from '@tanstack/react-table';

export type CuratedMembersInfo = Pick<
  FormDTO,
  'firstName' | 'lastName' | 'province' | 'occupation' | 'gender'
> & {
  status: string;
};

export function MembersTable() {
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

  const members = [
    {
      id: 'uuid',
      firstName: 'John',
      lastName: 'Doe',
      province: '$250.00',
      occupation: 'Credit Card',
      gender: 'Credit Card',
      createdAt: 'dhbud',
    },
    {
      id: 'uuid2',
      firstName: 'John',
      lastName: 'Doe',
      province: '$250.00',
      occupation: 'Credit Card',
      gender: 'Credit Card',
      createdAt: 'dhbud',
    },
    {
      id: 'uuid3',
      firstName: 'John',
      lastName: 'Doe',
      province: 'Doe00',
      occupation: 'Credit Card',
      gender: 'Credit Card',
      createdAt: 'dhbud',
    },
  ];

  return (
    <div className="mt-8">
      <DataTable data={members} columns={columns} />
    </div>
  );
}
