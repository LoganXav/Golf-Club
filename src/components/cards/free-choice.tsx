import { cn } from '@/lib/utils';
import { CardContent, CardDescription, CardTitle } from '../ui/card';
import { Paper } from '../ui/paper';
import { Icons } from '../icons';
import Link from 'next/link';

function FreeChoice() {
  const data = {
    title: 'Standard',
    price: '$0',
    header: 'Explore the world of golf',
    content:
      'For this package you can register your details and get standard golf',
    icon: <Icons.box />,
    plan: 'Free',
  };

  return (
    <Link href={'/register'}>
      <Paper
        variant={'success'}
        className="min-h-[300px] flex flex-col px-8 pt-8 text-start justify-start transform transition hover:scale-[.99] duration-200 ease-in-out w-full"
      >
        <CardTitle>{data.title}</CardTitle>
        <div className="flex  justify-between">
          <CardDescription className="pt-6 text-4xl">
            {data.price}
          </CardDescription>

          {data.icon}
        </div>
        <CardContent>{data.header}</CardContent>
        <CardContent>{data.content}</CardContent>
        <div className="pt-20 relative">
          <span
            className={cn(
              'h-6 w-24 rounded-t-sm absolute lg:top-20 bottom-0 text-white text-center',
              'bg-success-foreground'
            )}
          >
            {data.plan}
          </span>
        </div>
      </Paper>
    </Link>
  );
}

export default FreeChoice;
