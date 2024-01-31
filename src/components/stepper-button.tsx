import { cn } from '@/lib/utils';
import React from 'react';
import { Button } from './ui/button';
import { Icons } from './icons';

interface StepperButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  completed: boolean;
  className: string;
  step: number;
  selected: boolean;
}

export default function StepperButton({
  children,
  className,
  completed,
  selected,
  step,
}: Partial<StepperButtonProps>) {
  return (
    <Button
      className={cn(
        'border border-ring bg-input',
        className && className,
        selected ? 'border-primary' : 'text-gray-500',
        'flex justify-between whitespace-nowrap'
      )}
    >
      <span className="w-full flex justify-between text-foreground items-center">
        <span
          className={cn(
            'rounded-full w-6 h-6 p-1 flex items-center justify-center text-xs mr-2',
            selected
              ? 'text-white bg-primary'
              : 'text-white bg-primary-foreground'
          )}
        >
          {step}
        </span>
        {children}
        <span className="text-foreground">
          {completed && <Icons.spinner />}
        </span>
      </span>
    </Button>
  );
}
