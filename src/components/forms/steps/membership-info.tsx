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
import { formData } from '@/config/site';
import { Input } from '@/components/ui/input';

export function MembershipInfo() {
  const [selectedPreferences, setSelectedPreferences] = React.useState<
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
      <div className="grid gap-4 lg:grid-cols-2">
        <Input placeholder="Golf Handicap Index" type="number" />
        <Input placeholder="Handicap" type="number" />

        <div className="lg:col-span-2">
          {formData.preferences?.length && (
            <MultiSelect
              placeholder="Select your course preferences"
              selected={selectedPreferences}
              setSelected={setSelectedPreferences}
              options={formData.preferences.map((c) => ({
                label: toTitleCase(c),
                value: c,
              }))}
            />
          )}
        </div>

        <div className="lg:col-span-2">
          {formData.premiumServices?.length && (
            <MultiSelect
              placeholder="Select at least 3 the services category"
              selected={selectedPremiumServices}
              setSelected={setSelectedPremiumServices}
              options={formData.premiumServices.map((c) => ({
                label: toTitleCase(c),
                value: c,
              }))}
            />
          )}
        </div>
        <div className="lg:col-span-2">
          {formData.premiumServices?.length && (
            <MultiSelect
              placeholder="Select or type preferred Play Day "
              selected={selectedGolfDays}
              setSelected={setSelectedGolfDays}
              options={formData.golfDays.map((c) => ({
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
          <div className="mx-auto flex w-full flex-wrap items-center justify-center gap-4 ">
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
