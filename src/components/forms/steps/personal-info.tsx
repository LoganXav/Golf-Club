'use client';
import * as React from 'react';
import { Input } from '@/components/ui/input';

import { Textarea } from '@/components/ui/textarea';
import { SelectField } from '@/components/ui/select-field';

import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormDTO } from '@/lib/schema';
import { Label } from '@/components/ui/label';
import { PhotoUpload } from '@/components/upload';

interface StepProps {
  register: UseFormRegister<FormDTO>;
  errors: FieldErrors<FormDTO>;
}

export function PersonalInfo({ register, errors }: StepProps) {
  const Gender = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ];

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="lg:col-span-2">
        <PhotoUpload />
      </div>
      <div>
        <Input placeholder="First Name" {...register('firstName')} />
        {errors.firstName?.message && (
          <Label variant="error">{errors.firstName.message}</Label>
        )}
      </div>
      <div>
        <Input placeholder="Last Name" {...register('lastName')} />
        {errors.lastName?.message && (
          <Label variant="error">{errors.lastName.message}</Label>
        )}
      </div>
      <div>
        <SelectField options={Gender} placeholder=" Sex" />
      </div>
      <Input type="number" placeholder="Age" />
      <Input placeholder="Occupation" />
      <Input placeholder="Phone Number" />
      <Input placeholder="Email Address" />
      <Input placeholder="NIN" />

      <div className="flex flex-col lg:col-span-2">
        <Textarea placeholder="Tell us why you  would like to be a member?"></Textarea>
      </div>
    </div>
  );
}
