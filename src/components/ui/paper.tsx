import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const paperVariants = cva(
  'inline-flex  rounded-md border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80',
        success:
          'border-transparent bg-success text-success-foreground hover:border-success-foreground',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground shadow hover:border-destructive-foreground',
        outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface PaperProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof paperVariants> {}

function Paper({ className, variant, ...props }: PaperProps) {
  return (
    <div className={cn(paperVariants({ variant }), className)} {...props} />
  );
}

export { Paper, paperVariants };
