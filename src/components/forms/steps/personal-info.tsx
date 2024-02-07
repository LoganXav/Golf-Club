'use client';
import * as React from 'react';
import { Input } from '@/components/ui/input';

import { Textarea } from '@/components/ui/textarea';
import { SelectField } from '@/components/ui/select-field';

import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormDTO } from '@/lib/schema';
import { Label } from '@/components/ui/label';
import { PhotoUpload } from '@/components/upload';
import { DatePicker } from '@/components/date-picker';
import { formData } from '@/config/site';

interface StepProps {
  register: UseFormRegister<FormDTO>;
  errors: FieldErrors<FormDTO>;
}

export function PersonalInfo({ register, errors }: StepProps) {
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

      <Input type="number" placeholder="Phone Number" />
      <Input placeholder="Email Address" type="email" />
      <DatePicker placeholder="Date of Birth" dateOfBirth={true} />
      <SelectField options={formData.genders} placeholder="Gender" />
      <Input placeholder="Occupation" />
      <Input placeholder="NIN" type="number" />
      <Input type="number" placeholder="Zip Code" />
      <SelectField labelOptions={formData.branch} placeholder="City" />

      <div className="flex flex-col lg:col-span-2">
        <Textarea placeholder="Address"></Textarea>
      </div>
    </div>
  );
}
