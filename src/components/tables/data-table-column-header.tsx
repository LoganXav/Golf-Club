import * as React from 'react';
import { cn } from '@/lib/utils';
import { CaretSortIcon } from '@radix-ui/react-icons';
import { Column } from '@tanstack/react-table';

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({
  // column,
  className,
  title,
}: DataTableColumnHeaderProps<TData, TValue>) {
  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <div className="text-md flex items-center space-x-1 font-medium text-primary">
        <CaretSortIcon className=" h-4 w-4" aria-hidden="true" />
        <span>{title}</span>
      </div>
    </div>
  );
}
