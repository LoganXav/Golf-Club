'use client';

import * as React from 'react';
import type { Option } from '@/types';
import { Cross2Icon } from '@radix-ui/react-icons';
import { Command as CommandPrimitive } from 'cmdk';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Command, CommandGroup, CommandItem } from '@/components/ui/command';

interface MultiSelectProps {
  selected: Option[] | null;
  setSelected: React.Dispatch<React.SetStateAction<Option[] | undefined>>;
  // eslint-disable-next-line no-unused-vars
  onChange?: (selected: Option[] | null) => void;
  placeholder?: string;
  options: Option[];
}

export function MultiSelect({
  selected,
  setSelected,
  onChange,
  placeholder = 'Select options',
  options,
}: MultiSelectProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState('');

  // Register as input field to be used in react-hook-form
  React.useEffect(() => {
    if (onChange) onChange(selected?.length ? selected : null);
  }, [onChange, selected]);

  const handleSelect = React.useCallback(
    (option: Option) => {
      const newSelected = [...(selected ?? []), option];
      setSelected(newSelected);
    },
    [selected, setSelected]
  );

  const handleRemove = React.useCallback(
    (option: Option) => {
      const newSelected = selected?.filter((item) => item !== option); // Filter out the option
      setSelected(newSelected);
    },
    [selected, setSelected]
  );

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (!inputRef.current) return;

      if (event.key === 'Backspace' || event.key === 'Delete') {
        const newSelected = selected?.slice(0, -1); // Remove last item
        setSelected(newSelected);
      }

      // Blur input on escape
      if (event.key === 'Escape') {
        inputRef.current.blur();
      }
    },
    [selected, setSelected]
  );

  // Memoize filtered options to avoid unnecessary re-renders
  const filteredOptions = React.useMemo(() => {
    return options.filter((option) => {
      if (selected?.find((item) => item.value === option.value)) return false;

      if (query.length === 0) return true;

      return option.label.toLowerCase().includes(query.toLowerCase());
    });
  }, [options, query, selected]);

  return (
    <Command onKeyDown={handleKeyDown} className="h-min overflow-visible">
      <div className="group flex min-h-[54px] items-center rounded-md border border-ring bg-input px-3 py-3 text-foreground ring-offset-background focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 hover:border-primary">
        <div className="flex w-full flex-wrap gap-1">
          {selected?.map((option) => {
            return (
              <Badge
                key={option.value}
                variant="secondary"
                className="rounded text-foreground hover:bg-secondary"
              >
                {option.label}
                <Button
                  aria-label="Remove option"
                  size="sm"
                  className="ml-2 h-auto bg-transparent p-0 text-primary hover:bg-transparent hover:text-destructive"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      e.stopPropagation();
                      handleRemove(option);
                    }
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onClick={() => handleRemove(option)}
                >
                  <Cross2Icon className="h-3 w-3" aria-hidden="true" />
                </Button>
              </Badge>
            );
          })}
          <CommandPrimitive.Input
            ref={inputRef}
            placeholder={placeholder}
            className="placeholder:text-muted-foreground flex-1 bg-transparent px-1 outline-none"
            value={query}
            onValueChange={setQuery}
            onBlur={() => setOpen(false)}
            onFocus={() => setOpen(true)}
          />
        </div>
      </div>
      <div className="relative z-50 mt-2">
        {open && filteredOptions.length > 0 ? (
          <div className="text-popover-foreground animate-in absolute top-0 w-full rounded-md border bg-input shadow-md outline-none">
            <CommandGroup className="h-full overflow-auto">
              {filteredOptions.map((option) => {
                return (
                  <CommandItem
                    key={option.value}
                    className="cursor-pointer px-2 py-1.5 hover:bg-secondary"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onSelect={() => {
                      handleSelect(option);
                      setQuery('');
                    }}
                  >
                    {option.label}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </div>
        ) : null}
      </div>
    </Command>
  );
}
