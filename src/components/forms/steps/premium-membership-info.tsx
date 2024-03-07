'use client';
import * as React from 'react';
import { MultiSelect } from '@/components/ui/multi-select';
import { toTitleCase } from '@/lib/utils';
import { formData } from '@/config/site-data';
import { Input } from '@/components/ui/input';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { FormDTO } from '@/lib/schema';
import { Label } from '@/components/ui/label';

interface StepProps {
  errors: FieldErrors<FormDTO>;
  control: Control<FormDTO>;
}
export function PremiumMembershipInfo({ errors, control }: StepProps) {
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
        <Label>Premium services</Label>

        {formData.services?.length && (
          <Controller
            name="premiumService"
            control={control}
            render={({ field }) => (
              <MultiSelect
                selected={field.value || null}
                setSelected={field.onChange}
                options={formData.services.map((c) => ({
                  label: toTitleCase(c),
                  value: c,
                }))}
              />
            )}
          />
        )}
        {errors.premiumService?.message && (
          <Label variant="error">{errors.premiumService.message}</Label>
        )}
      </div>
      <div className="space-y-2 lg:col-span-2">
        <Label>Premium merchandise</Label>

        {formData.merchandise?.length && (
          <Controller
            name="premiumMerchandise"
            control={control}
            render={({ field }) => (
              <MultiSelect
                selected={field.value || null}
                setSelected={field.onChange}
                options={formData.merchandise.map((c) => ({
                  label: toTitleCase(c),
                  value: c,
                }))}
              />
            )}
          />
        )}
        {errors.premiumMerchandise?.message && (
          <Label variant="error">{errors.premiumMerchandise.message}</Label>
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
