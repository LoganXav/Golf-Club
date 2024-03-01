import * as React from 'react';
import { cn } from '@/lib/utils';
import { CaretSortIcon } from '@radix-ui/react-icons';
import { Column } from '@tanstack/react-table';
import { Button } from '../ui/button';

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  className,
  title,
}: DataTableColumnHeaderProps<TData, TValue>) {
  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <Button
        variant="ghost"
        size="page"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        className="flex items-center space-x-1 p-0 text-[17px] text-primary"
      >
        <span>{title}</span>
        <CaretSortIcon className="h-4 w-4" aria-hidden="true" />
      </Button>
    </div>
  );
}
