'use client';
import * as React from 'react';
import { Input } from '@/components/ui/input';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { FormDTO } from '@/lib/schema';
import { Label } from '@/components/ui/label';
interface StepProps {
  errors: FieldErrors<FormDTO>;
  control: Control;
}

export function EmergencyContactInfo({ errors, control }: StepProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="space-y-2">
        <Label>Name</Label>
        <Controller
          name="contactName"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
        {errors.contactName?.message && (
          <Label variant="error">{errors.contactName.message}</Label>
        )}
      </div>
      <div className="space-y-2">
        <Label>Relationship</Label>
        <Controller
          name="relationship"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
        {errors.relationship?.message && (
          <Label variant="error">{errors.relationship.message}</Label>
        )}
      </div>

      <div className="space-y-2">
        <Label>Mobile Number</Label>
        <Controller
          name="contactNo"
          control={control}
          render={({ field }) => (
            <Input type="number" inputMode="numeric" {...field} />
          )}
        />
        {errors.contactNo?.message && (
          <Label variant="error">{errors.contactNo.message}</Label>
        )}
      </div>
      <div className="space-y-2">
        <Label>Email Address</Label>
      <Controller
          name="contactEmail"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
        {errors.contactEmail?.message && (
          <Label variant="error">{errors.contactEmail.message}</Label>
        )}
      </div>
    </div>
  );
}
