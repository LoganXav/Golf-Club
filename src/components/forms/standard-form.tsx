'use client';
import * as React from 'react';
import { PersonalInfo } from './steps';
import { History } from './steps';
import { NextOfKin } from './steps';
import { PaymentInfo } from './steps';
import StepperButton from '../stepper-button';
import useStepper from '@/hooks/use-stepper';
import { Button } from '../ui/button';

export function StandardForm() {
  const stepper = useStepper();

  const steps = [
    { label: 'Personal Info', content: <PersonalInfo /> },
    { label: 'Payment Info', content: <PaymentInfo /> },
    { label: 'NOK Info', content: <NextOfKin /> },
    { label: 'History Info', content: <History /> },
  ];
  const isFirstStep = stepper.step === 0;
  const isLastStep = stepper.step === steps.length - 1;

  return (
    <>
      <div className="flex flex-col lg:flex-row w-full gap-8 lg:items-start">
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 place-items-center">
          {steps.map((step, i) => (
            <div key={i}>
              <StepperButton
                stepper={stepper}
                // completed={true}
                completed={step.label === 'NOK Info' && true}
                selected={stepper.step === i}
                step={i + 1}
                i={i}
              >
                {step.label}
              </StepperButton>
            </div>
          ))}
        </div>
        <div className="flex-1" />
        <div className="lg:w-3/4">
          {steps?.[stepper.step]?.content}
          <div className="flex gap-4 justify-center mt-16">
            <Button
              variant="destructive"
              disabled={isFirstStep && true}
              onClick={() => stepper.previous()}
            >
              Previous
            </Button>
            <Button onClick={() => stepper.next()}>
              {isLastStep ? 'Submit' : 'Next'}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
