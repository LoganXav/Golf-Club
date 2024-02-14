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
      <div>
        <Input
          placeholder="Phone Number"
          type="number"
          {...register('phone')}
        />
        {errors.phone?.message && (
          <Label variant="error">{errors.phone.message}</Label>
        )}
      </div>
      <div>
        <Input
          placeholder="Email Address"
          type="email"
          {...register('email')}
        />
        {errors.email?.message && (
          <Label variant="error">{errors.email.message}</Label>
        )}
      </div>
      <div>
        <DatePicker
          placeholder="Date of Birth"
          dateOfBirth={true}
          {...register('dateOfBirth')}
        />
        {errors.dateOfBirth?.message && (
          <Label variant="error">{errors.dateOfBirth.message}</Label>
        )}
      </div>
      <div>
        <SelectField options={formData.genders} placeholder="Gender" />
        {errors.gender?.message && (
          <Label variant="error">{errors.gender.message}</Label>
        )}
      </div>
      <div>
        <Input placeholder="Occupation" {...register('occupation')} />
      </div>
      <div>
        <Input placeholder="NIN" type="number" {...register('nin')} />
        {errors.nin?.message && (
          <Label variant="error">{errors.nin.message}</Label>
        )}
      </div>
      <div>
        <Input type="error" placeholder="Zip Code" {...register('zip')} />
        {errors.zip?.message && (
          <Label variant="error">{errors.zip.message}</Label>
        )}
      </div>
      <div>
        <SelectField
          labelOptions={formData.branch}
          placeholder="City"
          {...register('city')}
        />
        {errors.city?.message && (
          <Label variant="error">{errors.city.message}</Label>
        )}
      </div>

      <div className="flex flex-col lg:col-span-2">
        <Textarea placeholder="Address" {...register('address')}></Textarea>
        {errors.address?.message && (
          <Label variant="error">{errors.address.message}</Label>
        )}
      </div>
    </div>
  );
}
