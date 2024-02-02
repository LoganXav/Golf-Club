'use client';
import * as React from 'react';
import { Input } from '@/components/ui/input';

export function NextOfKin() {
  return (
    <div className=" grid lg:grid-cols-2  gap-4   ">
      <h1 className="lg:text-1xl  text-xl font-semibold leading-none    ">
        Next of Kin
      </h1>

      <span />
      <Input placeholder="Name " />
      <Input placeholder="Relationship" />
      <Input placeholder="Mobile Number" />

      <div className="relative">
        <Input placeholder="Email Address" />

        {/* //checkbox */}
      </div>
    </div>
  );
}
