'use client';
import * as React from 'react';
import { Input } from '@/components/ui/input';
import { FieldErrors } from 'react-hook-form';
import { FormDTO } from '@/lib/schema';
import { Label } from '@/components/ui/label';
interface StepProps {
  errors: FieldErrors<FormDTO>;
}

export function EmergencyContactInfo({ errors }: StepProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div>
        <Input placeholder="Name" />
        {errors.contactName?.message && (
          <Label variant="error">{errors.contactName.message}</Label>
        )}
      </div>
      <div>
        <Input placeholder="Relationship" />
        {errors.relationship?.message && (
          <Label variant="error">{errors.relationship.message}</Label>
        )}
      </div>
      <div>
        <Input placeholder="Mobile Number" type="number" />
        {errors.contactNo?.message && (
          <Label variant="error">{errors.contactNo.message}</Label>
        )}
      </div>
      <div>
        <Input placeholder="Email Address" />
        {errors.contactEmail?.message && (
          <Label variant="error">{errors.contactEmail.message}</Label>
        )}
      </div>
    </div>
  );
}
