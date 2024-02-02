'use client';
import * as React from 'react';
import { MultiSelect } from '@/components/ui/multi-select';
import { toTitleCase } from '@/lib/utils';
import { Option } from '@/types';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../ui/dialog';
import Link from 'next/link';
import { Button } from '../../ui/button';

export function PaymentInfo() {
  const premiumItems = [
    'Access to Free Parking',
    'Access to Special Events & Tournaments',
    'Access to VIP Lounge',
    'Unlimited access to bar and restaurant',
  ];
  const premiumServices = [
    'Personalized Golf carts',
    'Gold Plated Lockers',
    '2 pairs of Golf wears monthly',
    'Golf shoes spikes ',
    'Umbrella',
    'Golf Bags',
  ];
  const golfDays = [
    'Weekdays 12-4pm',
    'Fridays-Sundays 12-4pm',
    'Fridays-Sundays 12-7pm',
    'Sundays only 12-7pm',
  ];
  // CATEGORY FILTER
  // links and unlinks the slected categories with a dot and creates a new query string with the selected categories to filter the products

  const [selectedPremiumItems, setSelectedPremiumItems] = React.useState<
    Option[] | null
  >(null);

  const [selectedPremiumServices, setSelectedPremiumServices] = React.useState<
    Option[] | null
  >(null);
  const [selectedGolfDays, setSelectedGolfDays] = React.useState<
    Option[] | null
  >(null);
  return (
    <div>
      <div className=" grid lg:grid-cols-2  gap-4   ">
        <h1 className="lg:text-1xl  text-xl font-semibold leading-none    ">
          Perks & Payment
        </h1>
        <span />
        <div className="col-span-2">
          {premiumItems?.length && (
            <MultiSelect
              placeholder="Select at least of the items category"
              selected={selectedPremiumItems}
              setSelected={setSelectedPremiumItems}
              options={premiumItems.map((c) => ({
                label: toTitleCase(c),
                value: c,
              }))}
            />
          )}
        </div>
        <div className="col-span-2 ">
          {premiumServices?.length && (
            <MultiSelect
              placeholder="Select at least 3 the services category"
              selected={selectedPremiumServices}
              setSelected={setSelectedPremiumServices}
              options={premiumServices.map((c) => ({
                label: toTitleCase(c),
                value: c,
              }))}
            />
          )}
        </div>
        <div className="col-span-2 ">
          {premiumServices?.length && (
            <MultiSelect
              placeholder="Select or type preferred Play Day "
              selected={selectedGolfDays}
              setSelected={setSelectedGolfDays}
              options={golfDays.map((c) => ({
                label: toTitleCase(c),
                value: c,
              }))}
            />
          )}
        </div>

        {/* <div className="col-span-2">
        <SelectField options={durationOption} placeholder=" Duration" />
      </div> */}
        <span />
      </div>
      <Dialog>
        <DialogTrigger>
          {/* <Button className="items-center  w-44 ">Proceed to Pay</Button> */}
        </DialogTrigger>
        <Dialog />
        <DialogContent className="absolute">
          <DialogHeader>
            <DialogTitle className="text-3xl">
              Choose your mode of payment
            </DialogTitle>
            <DialogDescription>
              Multiple options available to make payment seamless
            </DialogDescription>
          </DialogHeader>
          <div className="w-full flex mx-auto items-center justify-center flex-wrap gap-4 ">
            {[1, 2, 3].map((idx) => (
              <Link key={idx} href={'/register'}>
                <Button
                  className="border border-ring hover:border-primary"
                  variant="ghost"
                  size="lg"
                >
                  Payment 1-3
                </Button>
              </Link>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
