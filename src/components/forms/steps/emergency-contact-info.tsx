'use client';
import * as React from 'react';
import { Input } from '@/components/ui/input';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormDTO } from '@/lib/schema';
import { Label } from '@/components/ui/label';
interface StepProps {
  register: UseFormRegister<FormDTO>;
  errors: FieldErrors<FormDTO>;
}

export function EmergencyContactInfo({ register, errors }: StepProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div>
        <Input placeholder="Name " {...register('contactName')} />
        {errors.contactName?.message && (
          <Label variant="error">{errors.contactName.message}</Label>
        )}
      </div>
      <div>
        <Input placeholder="Relationship" {...register('relationship')} />
        {errors.relationship?.message && (
          <Label variant="error">{errors.relationship.message}</Label>
        )}
      </div>
      <div>
        <Input
          placeholder="Mobile Number"
          {...register('contactNo')}
          type="number"
        />
        {errors.contactNo?.message && (
          <Label variant="error">{errors.contactNo.message}</Label>
        )}
      </div>
      <div>
        <Input
          placeholder="Email Address"
          {...register('contactEmail')}
          type="number"
        />
        {errors.contactEmail?.message && (
          <Label variant="error">{errors.contactEmail.message}</Label>
        )}
      </div>
    </div>
  );
}
