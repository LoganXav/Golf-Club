import { Card } from '@/components/cards/card';
import { Icons } from '@/components/icons';
import Paystack from '../../../assets/images/paystack.svg';
import Flutterwave from '../../../assets/images/flutterwave.svg';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function PremiumPaymentInfo() {
  return (
    <div className="">
      <h2 className="p-4">Select your preferred payment platform</h2>
      <div className=" flex flex-col gap-8 p-4  md:flex-row ">
        <div className=" h-full rounded-md  bg-destructive bg-white  p-4 py-20 md:w-1/2  ">
          <Image
            src={Paystack}
            alt="paystack"
            className="  "
            width={300}
            height={300}
          ></Image>
          {/* <Button>Proceed to Pay</Button> */}
        </div>

        <div className=" h-full w-full  rounded-md bg-destructive  bg-white p-4 py-20 md:w-1/2 ">
          <Image
            src={Flutterwave}
            alt="flutterwave"
            className=" md:ml-10"
            width={300}
            height={300}
          ></Image>
          {/* <Button>Proceed to Pay</Button> */}
        </div>
      </div>
    </div>
  );
}
