'use client';

import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

import { cn } from '@/lib/utils';

interface Props {
  theme: string | undefined;
  /* eslint-disable no-unused-vars */
  setTheme: (theme: string) => void;
}
const ThemeToggler = ({ theme, setTheme }: Props) => (
  <SwitchPrimitives.Root
    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    className={cn(
      'peer relative inline-flex w-[145px] shrink-0 cursor-pointer items-center rounded-full border-2 border-ring p-[5px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-transparent data-[state=unchecked]:bg-transparent'
    )}
  >
    <span className="absolute left-4 scale-0 text-sm text-white dark:scale-100">
      Light Mode
    </span>
    <SwitchPrimitives.Thumb
      className={cn(
        'pointer-events-none flex h-8 w-8  items-center justify-center  rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-24 data-[state=unchecked]:translate-x-0  data-[state=checked]:bg-tertiary data-[state=unchecked]:bg-black'
      )}
    >
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium">
        <SunIcon
          className="h-4 w-4 rotate-0 scale-0 text-black transition-all dark:-rotate-90 dark:scale-100"
          aria-hidden="true"
        />
        <MoonIcon
          className="absolute h-4 w-4 rotate-90 scale-100 text-white transition-all dark:rotate-0 dark:scale-0"
          aria-hidden="true"
        />
      </span>
    </SwitchPrimitives.Thumb>
    <span className="ml-2 scale-100 text-sm text-input_invert dark:scale-0">
      Dark Mode
    </span>
  </SwitchPrimitives.Root>
);
ThemeToggler.displayName = 'ThemeToggler';

export { ThemeToggler };
