'use client';
import { Combobox } from '@/components/combo';
import clsx from 'clsx';
import React, { SetStateAction } from 'react';

export default function IndexPage() {
  function handleCreateOptions(arg: any) {
    return alert(arg);
  }

  const [option, setOption] = React.useState<SetStateAction<undefined>>();

  const yourOptions = [
    {
      id: 1,
      name: 'Shopping',
    },
    {
      id: 2,
      name: 'Dancing',
    },
    {
      id: 3,
      name: 'Drinking',
    },
  ];
  return (
    <main className="container mx-auto flex flex-col items-center space-y-4 px-4 pt-24">
      <Combobox
        mode="single" //single or multiple
        options={yourOptions}
        placeholder="Select option..."
        selected={option} // string or array
        onChange={(value) => setOption(value)}
        onCreate={(value) => {
          handleCreateOptions(value);
        }}
        className="w-72"
      />

      {/* <div className="max-w-3xl">
        {[
          {
            title: 'Sign Up On Salary PayDay',
            description:
              "You'll need to complete a simple online registration with your bio-data and employer details.",
          },
          {
            title: 'Check your eligibility',
            description:
              'Using your salary account financial statement, we prequalify you for 50% if your monthly salary',
          },
          {
            title: 'Access up to 50% of your Pay',
            description:
              "Get paid when you need it, not just when it's payday. You can access up to 50% of what you've earned, up to 3 times every pay cycle. You can access up to 50% of what you've earned, up to 3 times every pay cycle. You can access up to 50% of what you've earned, up to 3 times every pay cycle. You can access up to 50% of what you've earned, up to 3 times every pay cycle. You can access up to 50% of what you've earned, up to 3 times every pay cycle. You can access up to 50% of what you've earned, up to 3 times every pay cycle.",
          },
        ].map(({ title, description }, index, items) => {
          const isOdd = !!((index + 1) % 2);

          const infoContent = (
            <div key={index} className="w-full md:w-1/2 md:p-4">
              <div className="text-mui-primary-main mb-4">{title}</div>
              <div>{description}</div>
            </div>
          );

          const imgContent = <div className="w-full md:w-1/2 md:p-4"></div>;

          return (
            <div key={index}>
              <div className="flex justify-center">
                <div
                  className={clsx(
                    'translate-y-8 rounded-full px-4',
                    isOdd
                      ? 'bg-mui-primary-lighter text-mui-primary-main'
                      : 'bg-mui-secondary-lightAlt text-mui-secondary-main'
                  )}
                >
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white">
                    <div className="h-3 w-3 rounded-full border bg-slate-800"></div>
                  </div>
                </div>
              </div>
              <div className="gap-4md:mb-0 relative flex flex-wrap items-center md:flex-nowrap md:gap-8">
                <>
                  {imgContent}
                  {infoContent}
                </>
                {index !== items.length - 1 && (
                  <div className="absolute bottom-0 left-0 right-0 top-0 flex justify-center">
                    <div className="h-full w-[1px] translate-y-8 bg-gray-200" />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div> */}
    </main>
  );
}
