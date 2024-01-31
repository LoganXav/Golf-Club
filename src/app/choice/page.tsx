import { Header } from '@/components/headers';
import { Icons } from '@/components/icons';
import { CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Paper } from '@/components/ui/paper';
import Link from 'next/link';
import React from 'react';

export default function ChoicePage() {
  return (
    <main className=" flex flex-col items-center space-y-4 pt-14 mx-auto">
      <Header
        tabs={false}
        title="Golf Membership "
        category="Your one stop registration portal"
        icon={<Icons.cart />}
        desc="Discover the world of joining a community filled with golf lovers, With services that suits your needs."
      />
      <div className="md:flex md:flex-row gap-5 mx-auto "></div>
      <div className="w-full flex flex-col items-center md:flex-row gap-4">
        {[
          {
            id: 1,
            title: 'Standard',
            price: '$0',
            header: 'Explore the world of golf',
            content:
              'For this package you can register your details and get standard golf',
            icon: <Icons.box />,
            plan: 'Free',
          },
          {
            id: 2,
            title: 'Gold',
            price: '$20',
            header: 'Explore the world of golf',
            content:
              'For this package you can register your details and get premium golf',
            icon: <Icons.box />,
            plan: 'Paid',
          },
        ].map(({ title, price, header, content, icon, plan, id }) => (
          <Link href={'/'} key={id} className="w-full flex flex-col  py-6 ">
            <Paper
              variant={id === 1 ? 'success' : 'destructive'}
              className="min-h-[300px] flex flex-col px-8 pt-8 text-start justify-start transform transition hover:scale-105 duration-200 ease-in-out  "
              key={id}
            >
              <CardTitle>{title} </CardTitle>
              <div className="flex  justify-between">
                <CardDescription className="pt-6 text-4xl">
                  {price}
                </CardDescription>

                {icon}
              </div>
              <CardContent> {header} </CardContent>

              <CardContent>{content}</CardContent>
              <div className=" pt-20   relative">
                <span
                  className={`h-6 w-24 rounded-t-sm absolute lg:top-20 bottom-0 text-white text-center ${
                    id === 1
                      ? 'bg-success-foreground'
                      : 'bg-destructive-foreground'
                  }`}
                >
                  {plan}
                </span>
              </div>
            </Paper>
          </Link>
        ))}
      </div>
    </main>
  );
}
