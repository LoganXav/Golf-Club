'use client';
import * as React from 'react';
import { StandardInfo } from './standard-info';
import StepperButton from '../stepper-button';

export function StandardForm() {
  const steps = [
    { content: <StandardInfo /> },
    { content: <StandardInfo /> },
    { content: <StandardInfo /> },
  ];
  return (
    <div className="flex w-full gap-16 mt-16">
      <div className="flex flex-col gap-4 flex-1">
        {steps.map((step, i) => (
          <div key={i}>
            <StepperButton completed={true} selected={true} step={1 + 1}>
              Personal Information
            </StepperButton>
          </div>
        ))}
      </div>
      <div className="w-2/3">
        {steps.slice(0, 1).map((step) => (
          <>{step.content}</>
        ))}
      </div>
    </div>
  );
}
