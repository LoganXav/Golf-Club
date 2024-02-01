'use client';
import * as React from 'react';
import { StandardInfo } from './standard-info';
import StepperButton from '../stepper-button';

export function StandardForm() {
  const steps = [
    { content: <StandardInfo /> },
    { content: <StandardInfo /> },
    { content: <StandardInfo /> },
    { content: <StandardInfo /> },
  ];
  return (
    <div className="flex flex-col lg:flex-row w-full gap-8 lg:items-start">
      <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 place-items-center">
        {steps.map((step, i) => (
          <div key={i}>
            <StepperButton completed={true} selected={true} step={i + 1}>
              Personal Information
            </StepperButton>
          </div>
        ))}
      </div>
      <div className="flex-1" />
      <div className="lg:w-2/3">
        {steps.slice(0, 1).map((step) => (
          <>{step.content}</>
        ))}
      </div>
    </div>
  );
}
