'use client';
import * as React from 'react';
import { Input } from '@/components/ui/input';
import { SelectField } from '@/components/ui/select-field';

export function History() {
  const memberOptions = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
  ];
  const planOptions = [
    { label: 'Standard', value: 'yes' },
    { label: 'Premium', value: 'no' },
  ];
  const durationOption = [
    { label: '0-1year', value: 'yes' },
    { label: '1-2 years', value: 'no' },
    { label: '2 years and above', value: 'no' },
  ];
  const handicapOption = [
    { label: 'Low handicap-0-10', value: 'yes' },
    { label: 'Mid handicap-11-18', value: 'no' },
    { label: 'High handicap-19+', value: 'no' },
  ];

  return (
    <div className="grid gap-4  lg:grid-cols-2">
      <h1 className="lg:text-1xl  text-xl font-semibold leading-none">
        History
      </h1>
      <span />

      <SelectField
        options={memberOptions}
        placeholder=" Have you ever been affiliated with any golf club?"
      />
      <Input placeholder="Name of the golf club(if yes) " />
      <div className="lg:col-span-2">
        <SelectField options={durationOption} placeholder=" Duration" />
      </div>
      <div className="lg:col-span-2">
        <SelectField
          options={handicapOption}
          placeholder=" Choose your current handicap"
        />
      </div>
      <span className=" text-lg">Referrals</span>
      <span />
      <SelectField
        options={memberOptions}
        placeholder=" Were you referred by an existing member?"
      />
      <Input placeholder="Members Name (if yes) " />

      <div className="">
        <SelectField
          options={planOptions}
          placeholder="Members Plan (if yes)"
        />
      </div>

      <div className="">
        <Input placeholder="Relationship" />
      </div>
    </div>
  );
}
