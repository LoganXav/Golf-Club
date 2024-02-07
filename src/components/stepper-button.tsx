import { cn } from '@/lib/utils';
import React from 'react';
import { Button } from './ui/button';
import { Icons } from './icons';
import type { Stepper } from '@/types';

interface StepperButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  completed: boolean;
  className?: string;
  step: number;
  selected: boolean;
  stepper: Stepper;
  i: number;
}

export default function StepperButton({
  children,
  className,
  completed,
  selected,
  step,
  stepper,
  i,
}: StepperButtonProps) {
  return (
    <Button
      className={cn(
        'min-w-48 border border-ring bg-input lg:min-w-56',
        className && className,
        selected ? 'border-primary' : 'text-gray-500',
        'flex justify-between whitespace-nowrap'
      )}
      onClick={() => stepper.go(i)}
    >
      <div className="flex w-full items-center justify-between px-2 text-foreground">
        {children}
        <span
          className={cn(
            'flex h-6 w-6 items-center justify-center rounded-full p-1 text-xs',
            completed
              ? 'bg-success text-success-foreground'
              : 'bg-primary-foreground text-white'
            // selected
            //   ? 'text-white bg-primary'
            //   : 'text-white bg-primary-foreground'
          )}
        >
          {completed ? <Icons.check /> : step}
        </span>
      </div>
    </Button>
  );
}
