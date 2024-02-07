'use client';
import * as React from 'react';
import { Input } from '@/components/ui/input';

export function EmergencyContactInfo() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
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
