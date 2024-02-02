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
        'border border-ring bg-input min-w-44 lg:min-w-56',
        className && className,
        selected ? 'border-primary' : 'text-gray-500',
        'flex justify-between whitespace-nowrap'
      )}
      onClick={() => stepper.go(i)}
    >
      <div className="w-full flex justify-between text-foreground items-center px-4">
        {children}
        <span
          className={cn(
            'rounded-full w-6 h-6 p-1 flex items-center justify-center text-xs',
            completed
              ? 'bg-success text-success-foreground'
              : 'text-white bg-primary-foreground'
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
