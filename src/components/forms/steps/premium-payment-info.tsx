import Paystack from '../../../assets/images/paystack.svg';
import Flutterwave from '../../../assets/images/flutterwave.svg';
import Image from 'next/image';
import React from 'react';

export default function PremiumPaymentInfo() {
  return (
    <div className="">
      <h2 className="p-4">Select your preferred payment platform</h2>
      <div className=" flex flex-col gap-8 p-4  md:flex-row ">
        <div className=" h-full rounded-md border-2  border-info-foreground bg-input  p-4 py-20  md:w-1/2  ">
          <Image
            src={Paystack}
            alt="paystack"
            className="  "
            width={300}
            height={300}
          ></Image>
        </div>

        <div className=" h-full w-full  rounded-md border-2  border-info-foreground bg-input  p-4 py-20 md:w-1/2 ">
          <Image
            src={Flutterwave}
            alt="flutterwave"
            className=" md:ml-10"
            width={300}
            height={300}
          ></Image>
        </div>
      </div>
    </div>
  );
}
