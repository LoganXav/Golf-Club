'use client';

import * as React from 'react';
import { CalendarIcon } from '@radix-ui/react-icons';
import { format } from 'date-fns';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

interface DatePickerProps {
  value: any;
  onChange: any;
  placeholder?: string;
  dateOfBirth?: boolean;
}

export function DatePicker({
  placeholder = 'Pick a date',
  dateOfBirth,
  value,
  onChange,
  ...props
}: DatePickerProps) {
  // const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-full justify-start border border-ring bg-input px-3 text-left font-normal text-foreground hover:border-primary',
            !value && 'text-foreground'
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value ? format(value, 'PPP') : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start">
        <Calendar
          mode="single"
          selected={value}
          defaultMonth={value}
          onSelect={(date) => {
            onChange(date);
          }}
          initialFocus={false}
          disabled={dateOfBirth ? (date) => date > new Date() : false}
          {...props}
        />
      </PopoverContent>
    </Popover>
  );
}
