'use client';
import * as React from 'react';
import { PersonalInfo } from './steps';
import { EmergencyContactInfo } from './steps';
import { MembershipInfo } from './steps';
import StepperButton from '../stepper-button';
import useStepper from '@/hooks/use-stepper';
import { Button } from '../ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { type FormDTO, FormDataSchema, FieldName } from '@/lib/schema';

export function StandardForm() {
  const stepper = useStepper();

  const {
    register,
    handleSubmit,
    // watch,
    reset,
    trigger,
    formState: { errors },
  } = useForm<FormDTO>({
    resolver: zodResolver(FormDataSchema),
  });

  const processForm: SubmitHandler<FormDTO> = (data) => {
    console.log('data', data);
    reset();
  };

  const stepProps = {
    register,
    errors,
  };

  const steps = [
    {
      label: 'Personal Details',
      content: <PersonalInfo {...stepProps} />,
      fields: ['firstName', 'lastName'],
    },
    { label: 'Membership Details', content: <MembershipInfo /> },
    { label: 'Emergency Contact', content: <EmergencyContactInfo /> },
  ];
  const isFirstStep = stepper.step === 0;
  const isLastStep = stepper.step === steps.length - 1;

  const next = async () => {
    const fields = steps?.[stepper.step]?.fields;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });

    if (!output) return;

    if (isLastStep) {
      await handleSubmit(processForm)();
    } else {
      stepper.next();
    }
  };

  const previous = () => {
    if (!isFirstStep) {
      stepper.previous();
    }
  };

  return (
    <>
      <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-start">
        <div className="grid place-items-center gap-4">
          {steps.map((step, i) => (
            <div key={i}>
              <StepperButton
                stepper={stepper}
                // completed={true}
                completed={step.label === 'Personal Details' && true}
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
        <form onSubmit={handleSubmit(processForm)} className="lg:w-3/4">
          {steps?.[stepper.step]?.content}
          <div className="mt-16 flex justify-center gap-4">
            <Button
              type="button"
              variant="destructive"
              disabled={isFirstStep && true}
              onClick={previous}
            >
              Previous
            </Button>
            <Button type="button" onClick={next}>
              {isLastStep ? 'Submit' : 'Next'}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
