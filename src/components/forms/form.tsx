'use client';
import * as React from 'react';
import { Info } from './info';
import StepperButton from '../stepper-button';
import { History } from './history';
import { NextOfKin } from './next-of-kin';
import { PremiumPayment } from './premium-payment';

export function StandardForm() {
  const steps = [
    { content: <Info /> },
    { content: <PremiumPayment /> },
    { content: <NextOfKin /> },
    { content: <History /> },
    { content: <Info /> },
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
