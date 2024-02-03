import * as React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface SelectFieldProps {
  options: { label: string; value: string }[];
  placeholder: string;
}

export function SelectField({ options, placeholder }: SelectFieldProps) {
  return (
    <Select>
      <SelectTrigger className="text-muted-foreground">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((option, idx) => (
            <SelectItem key={idx} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
