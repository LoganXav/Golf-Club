'use client';
import * as React from 'react';
import { MultiSelect } from '@/components/ui/multi-select';
import { toTitleCase } from '@/lib/utils';
import { Option } from '@/types';
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
  const [selectedPreferences, setSelectedPreferences] = React.useState<
    Option[] | null
  >(null);

  const [selectedPremiumServices, setSelectedPremiumServices] = React.useState<
    Option[] | null
  >(null);
  const [selectedGolfDays, setSelectedGolfDays] = React.useState<
    Option[] | null
  >(null);
  return (
    <div>
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="space-y-2">
          <Label>Golf Handicap Index</Label>
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
          <Label> Handicap </Label>
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

        <div className="space-y-2  lg:col-span-2">
          <Label> Select your course preferences </Label>

          {formData.preferences?.length && (
            <MultiSelect
              placeholder="Select your course preferences"
              selected={selectedPreferences}
              setSelected={setSelectedPreferences}
              options={formData.preferences.map((c) => ({
                label: toTitleCase(c),
                value: c,
              }))}
            />
          )}
          {errors.preferences?.message && (
            <Label variant="error">{errors.preferences.message}</Label>
          )}
        </div>

        <div className="space-y-2 lg:col-span-2">
          <Label> Select at least 3 of the services category </Label>

          {formData.premiumServices?.length && (
            <MultiSelect
              placeholder="Select at least 3  of the services category"
              selected={selectedPremiumServices}
              setSelected={setSelectedPremiumServices}
              options={formData.premiumServices.map((c) => ({
                label: toTitleCase(c),
                value: c,
              }))}
            />
          )}
          {errors.premiumServices?.message && (
            <Label variant="error">{errors.premiumServices.message}</Label>
          )}
        </div>
        <div className="space-y-2 lg:col-span-2">
          <Label> Select pr type preferred Play Day </Label>

          {formData.premiumServices?.length && (
            <MultiSelect
              placeholder="Select or type preferred Play Day "
              selected={selectedGolfDays}
              setSelected={setSelectedGolfDays}
              options={formData.golfDays.map((c) => ({
                label: toTitleCase(c),
                value: c,
              }))}
            />
          )}
          {errors.golfDays?.message && (
            <Label variant="error">{errors.golfDays.message}</Label>
          )}
        </div>
      </div>
    </div>
  );
}
