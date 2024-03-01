import { cn } from '@/lib/utils';
import { CardContent, CardDescription, CardTitle } from '../ui/card';
import { Paper } from '../ui/paper';
import Link from 'next/link';
import Image from 'next/image';

interface CardProps {
  title: string;
  price: string;
  header: string;
  content: string;
  src: string;
  plan: string;
  href: string;
}

export function PlanCard({
  title,
  price,
  header,
  content,
  src,
  plan,
  href,
}: CardProps) {
  return (
    <Link href={href}>
      <Paper
        variant={plan === 'premium' ? 'destructive' : 'success'}
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
              plan === 'premium'
                ? 'bg-destructive-foreground'
                : 'bg-success-foreground'
            )}
          >
            {plan}
          </span>
        </div>
      </Paper>
    </Link>
  );
}
