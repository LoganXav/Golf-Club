import * as React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface SelectFieldProps {
  labelOptions?: {
    label: string;
    items?: {
      name: string;
      value: string;
    }[];
  }[];
  options?: {
    name: string;
    value: string;
  }[];
  placeholder: string;
}

export function SelectField({
  labelOptions,
  options,
  placeholder,
}: SelectFieldProps) {
  return (
    <Select>
      <SelectTrigger className="text-muted-foreground">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {labelOptions
            ? labelOptions.map((option, idx) => (
                <div key={idx}>
                  <SelectLabel>{option.label}</SelectLabel>
                  {option?.items?.map((item, idx) => (
                    <SelectItem key={idx} value={item.value}>
                      {item.name}
                    </SelectItem>
                  ))}
                </div>
              ))
            : options
              ? options?.map((item, idx) => (
                  <SelectItem key={idx} value={item.value}>
                    {item.name}
                  </SelectItem>
                ))
              : null}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
