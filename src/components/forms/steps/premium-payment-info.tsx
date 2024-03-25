'use client';
import { Label } from '@/components/ui/label';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import * as React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio';

interface Props {
  setPaymentMethod: React.Dispatch<React.SetStateAction<string>>;
}

export default function PremiumPaymentInfo({ setPaymentMethod }: Props) {
  return (
    <div className="space-y-4">
      <Label>Select a payment option</Label>
      <RadioGroup className="grid gap-4 lg:grid-cols-2" defaultValue="paystack">
        <Button
          type="button"
          onClick={() => setPaymentMethod('paystack')}
          className="flex min-w-[10rem] items-center justify-center gap-4 overflow-hidden rounded-md border bg-input py-8 shadow-none focus:border-primary"
        >
          <RadioGroupItem className="h-6 w-6" value="paystack" id="paystack" />
          <Label className="cursor-pointer" htmlFor="paystack">
            <Icons.paystack className="w-36 lg:w-44" />
          </Label>
        </Button>
        <Button
          type="button"
          onClick={() => setPaymentMethod('flutterwave')}
          className="flex min-w-[10rem] items-center justify-center gap-4 overflow-hidden rounded-md border bg-input py-8 shadow-none focus:border-primary"
        >
          <RadioGroupItem
            className="h-6 w-6"
            value="flutterwave"
            id="flutterwave"
          />
          <Label className="cursor-pointer" htmlFor="flutterwave">
            <Icons.flutterwave className="w-36 lg:w-44" />
          </Label>
        </Button>
      </RadioGroup>
    </div>
  );
}
