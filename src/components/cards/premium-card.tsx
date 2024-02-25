import { cn } from '@/lib/utils';
import { CardContent, CardDescription, CardTitle } from '../ui/card';
import { Paper } from '../ui/paper';

import { Icons } from '../icons';
import Link from 'next/link';
import Image from 'next/image';

export function PremiumCard() {
  const data = {
    title: 'Premium',
    price: '$20',
    header: 'Explore the world of golf',
    content:
      'For this package you can register your details and get premium golf',
    icon: <Icons.box />,
    plan: 'Paid',
    src: '/premium.svg',
  };

  return (
    <Link href={'/register'}>
      <Paper
        className="flex min-h-[300px] w-full transform flex-col justify-start px-8 pt-8 text-start transition duration-300 ease-linear hover:scale-[.99]"
        variant="destructive"
      >
        <CardTitle>{data.title}</CardTitle>
        <div className="flex  justify-between">
          <CardDescription className="pt-6 text-4xl">
            {data.price}
          </CardDescription>

          <Image
            src={data.src}
            width={200}
            height={200}
            alt="Premium Card Icon"
          />
        </div>
        <CardContent>{data.header}</CardContent>
        <CardContent>{data.content}</CardContent>
        <div className="relative pt-20">
          <span
            className={cn(
              'absolute bottom-0 h-6 w-24 rounded-t-sm text-center text-white',
              'bg-destructive-foreground'
            )}
          >
            {data.plan}
          </span>
        </div>
      </Paper>
    </Link>
  );
}
