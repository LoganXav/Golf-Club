'use client';
import * as React from 'react';
import { MultiSelect } from '@/components/ui/multi-select';
import { toTitleCase } from '@/lib/utils';
import { formData } from '@/config/site';
import { Input } from '@/components/ui/input';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { FormDTO } from '@/lib/schema';
import { Label } from '@/components/ui/label';

interface StepProps {
  errors: FieldErrors<FormDTO>;
  control: Control;
}
export function MembershipInfo({ errors, control }: StepProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="space-y-2">
        <Label>Handicap Index</Label>
        <Controller
          name="index"
          control={control}
          render={({ field }) => (
            <Input type="number" inputMode="numeric" {...field} />
          )}
        />
        {errors.index?.message && (
          <Label variant="error">{errors.index.message}</Label>
        )}
      </div>
      <div className="space-y-2">
        <Label>Handicap</Label>
        <Controller
          name="handicap"
          control={control}
          render={({ field }) => (
            <Input type="number" inputMode="numeric" {...field} />
          )}
        />
        {errors.handicap?.message && (
          <Label variant="error">{errors.handicap.message}</Label>
        )}
      </div>

      <div className="space-y-2 lg:col-span-2">
        <Label>Course Preferences</Label>

        {formData.preferences?.length && (
          <Controller
            name="preferences"
            control={control}
            render={({ field }) => (
              <MultiSelect
                selected={field.value || null}
                setSelected={field.onChange}
                options={formData.preferences.map((c) => ({
                  label: toTitleCase(c),
                  value: c,
                }))}
              />
            )}
          />
        )}
        {errors.preferences?.message && (
          <Label variant="error">{errors.preferences.message}</Label>
        )}
      </div>
      <div className="space-y-2 lg:col-span-2">
        <Label>Premium Services</Label>

        {formData.premiumServices?.length && (
          <Controller
            name="premiumServices"
            control={control}
            render={({ field }) => (
              <MultiSelect
                selected={field.value || null}
                setSelected={field.onChange}
                options={formData.premiumServices.map((c) => ({
                  label: toTitleCase(c),
                  value: c,
                }))}
              />
            )}
          />
        )}
        {errors.premiumServices?.message && (
          <Label variant="error">{errors.premiumServices.message}</Label>
        )}
      </div>
      <div className="space-y-2 lg:col-span-2">
        <Label>Golf Days</Label>

        {formData.golfDays?.length && (
          <Controller
            name="golfDays"
            control={control}
            render={({ field }) => (
              <MultiSelect
                placeholder="Select at least 3 days"
                selected={field.value || null}
                setSelected={field.onChange}
                options={formData.golfDays.map((c) => ({
                  label: toTitleCase(c),
                  value: c,
                }))}
              />
            )}
          />
        )}
        {errors.golfDays?.message && (
          <Label variant="error">{errors.golfDays.message}</Label>
        )}
      </div>
    </div>
  );
}
