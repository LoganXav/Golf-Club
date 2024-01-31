import { cn } from '@/lib/utils';
import { CardContent, CardDescription, CardTitle } from '../ui/card';
import { Paper } from '../ui/paper';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Icons } from '../icons';
import { Button } from '../ui/button';
import Link from 'next/link';

function PaidChoice() {
  const data = {
    title: 'Gold',
    price: '$20',
    header: 'Explore the world of golf',
    content:
      'For this package you can register your details and get premium golf',
    icon: <Icons.box />,
    plan: 'Paid',
  };

  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <Paper
          className="min-h-[300px] flex flex-col px-8 pt-8 text-start justify-start transform transition hover:scale-[.99] duration-200 ease-in-out w-full"
          variant="destructive"
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
                'bg-destructive-foreground'
              )}
            >
              {data.plan}
            </span>
          </div>
        </Paper>
      </DialogTrigger>
      <DialogContent className="absolute">
        <DialogHeader>
          <DialogTitle className="text-3xl">
            Are you registering for a family?
          </DialogTitle>
          <DialogDescription>
            This will help us recommend the best resume templates for your
            experience level.
          </DialogDescription>
        </DialogHeader>
        <div className="w-full flex mx-auto items-center justify-center flex-wrap gap-4 ">
          {[1, 2, 3].map((idx) => (
            <Link key={idx} href={'/'}>
              <Button variant="ghost" size="lg">
                0 - 3yrs
              </Button>
            </Link>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default PaidChoice;
