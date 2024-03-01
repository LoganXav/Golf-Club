import { cn } from '@/lib/utils';
import { CardContent, CardDescription, CardTitle } from '../ui/card';
import { Paper } from '../ui/paper';
import { Icons } from '../icons';
import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';

interface CardProps {
  title: string;
  price: string;
  header: string;
  content: string;
  icon: ReactNode;
  src: string;
  plan: string;
  href: string;
  variant?: string;
}

export function Card({
  title,
  price,
  header,
  content,
  icon,
  src,
  plan,
  href,
  variant,
}: CardProps) {
  const paperVariant = variant === 'destructive' ? 'destructive' : 'success';

  return (
    <Link href={href}>
      <Paper
        variant={paperVariant}
        className="flex min-h-[300px] w-full transform flex-col justify-start px-8 pt-8 text-start transition duration-200 ease-out hover:scale-[.99]"
      >
        <CardTitle>{title}</CardTitle>
        <div className="flex  justify-between">
          <CardDescription className="pt-6 text-4xl">{price}</CardDescription>
          <Image
            src={src}
            width={200}
            height={200}
            alt={`${title} Card Icon`}
          />
        </div>
        <CardContent>{header}</CardContent>
        <CardContent>{content}</CardContent>
        <div className="relative pt-20">
          <span
            className={cn(
              'absolute bottom-0 h-6 w-24 rounded-t-sm text-center text-white',
              variant === 'success' && 'bg-success-foreground',
              variant === 'destructive' && 'bg-destructive-foreground'
            )}
          >
            {plan}
          </span>
        </div>
      </Paper>
    </Link>
  );
}
