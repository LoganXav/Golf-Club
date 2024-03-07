'use client';
import * as React from 'react';
import { Input } from '@/components/ui/input';

import { Textarea } from '@/components/ui/textarea';
import { SelectField } from '@/components/ui/select-field';

import { Controller, FieldErrors, Control } from 'react-hook-form';
import { FormDTO } from '@/lib/schema';
import { Label } from '@/components/ui/label';
import { PhotoUpload } from '@/components/upload';
import { DatePicker } from '@/components/date-picker';
import { formData } from '@/config/site-data';

interface StepProps {
  errors: FieldErrors<FormDTO>;
  control: Control<FormDTO>;
}

export function PersonalInfo({ errors, control }: StepProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="lg:col-span-2">
        <PhotoUpload />
      </div>
      <div className="space-y-2">
        <Label>First Name</Label>
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
        {errors.firstName?.message && (
          <Label variant="error">{errors.firstName.message}</Label>
        )}
      </div>
      <div className="space-y-2">
        <Label>Last Name</Label>
        <Controller
          name="lastName"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
        {errors.lastName?.message && (
          <Label variant="error">{errors.lastName.message}</Label>
        )}
      </div>
      <div className="space-y-2">
        <Label>Phone Number</Label>
        <Controller
          name="phoneNumber"
          control={control}
          render={({ field }) => (
            <Input type="number" inputMode="numeric" {...field} />
          )}
        />
        {errors.phoneNumber?.message && (
          <Label variant="error">{errors.phoneNumber.message}</Label>
        )}
      </div>
      <div className="space-y-2">
        <Label>Email Address</Label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
        {errors.email?.message && (
          <Label variant="error">{errors.email.message}</Label>
        )}
      </div>
      <div className="space-y-2">
        <Label>Date of Birth (must be 18 or older)</Label>
        <Controller
          name="dateOfBirth"
          control={control}
          render={({ field }) => <DatePicker dateOfBirth={true} {...field} />}
        />
        {errors.dateOfBirth?.message && (
          <Label variant="error">{errors.dateOfBirth.message}</Label>
        )}
      </div>
      <div className="space-y-2">
        <Label>Gender</Label>
        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <SelectField options={formData.genders} {...field} />
          )}
        />
        {errors.gender?.message && (
          <Label variant="error">{errors.gender.message}</Label>
        )}
      </div>
      <div className="space-y-2">
        <Label>Occupation (if applicable)</Label>
        <Controller
          name="occupation"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
        {errors.occupation?.message && (
          <Label variant="error">{errors.occupation.message}</Label>
        )}
      </div>
      <div className="space-y-2">
        <Label>NIN (11 digits)</Label>
        <Controller
          name="nin"
          control={control}
          render={({ field }) => (
            <Input type="number" inputMode="numeric" {...field} />
          )}
        />
        {errors.nin?.message && (
          <Label variant="error">{errors.nin.message}</Label>
        )}
      </div>
      <div className="space-y-2">
        <Label>Zip Code</Label>
        <Controller
          name="zip"
          control={control}
          render={({ field }) => (
            <Input type="number" inputMode="numeric" {...field} />
          )}
        />
        {errors.zip?.message && (
          <Label variant="error">{errors.zip.message}</Label>
        )}
      </div>
      <div className="space-y-2">
        <Label>Province</Label>
        <Controller
          name="province"
          control={control}
          render={({ field }) => (
            <SelectField labelOptions={formData.branch} {...field} />
          )}
        />
        {errors.province?.message && (
          <Label variant="error">{errors.province.message}</Label>
        )}
      </div>
      <div className="space-y-2 lg:col-span-2">
        <Label>Address (optional)</Label>
        <Controller
          name="address"
          control={control}
          render={({ field }) => <Textarea {...field} />}
        />
        {errors.address?.message && (
          <Label variant="error">{errors.address.message}</Label>
        )}
      </div>
    </div>
  );
}
