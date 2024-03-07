'use client';
import * as React from 'react';
import useStepper from '@/hooks/use-stepper';
import { FieldName, FormDTO, FormDataSchema } from '@/lib/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { Icons } from '../icons';
import StepperButton from '../stepper-button';
import { EmergencyContactInfo, PersonalInfo } from './steps';
import { PremiumMembershipInfo } from './steps/premium-membership-info';
import PremiumPaymentInfo from './steps/premium-payment-info';
import { usePaymentMutation } from '@/api/core-api-payment';
import { toast } from 'sonner';

export function PremiumForm() {
  const stepper = useStepper();

  const { initializePayment, isLoading, error } = usePaymentMutation();
  const [paymentMethod, setPaymentMethod] = React.useState('paystack');

  const form = useForm<FormDTO>({
    defaultValues: {
      category: 'premium',
      // Personal Info
      firstName: 'John',
      lastName: 'Doe',
      phoneNumber: '08052916792',
      email: 'example@email.com',
      dateOfBirth: new Date('2006-02-16'),
      gender: 'Female',
      occupation: 'Engineer',
      nin: '26733491561',
      zip: 33052,
      province: 'Lagos Island',
      address: '3353, International Village court',

      // Membership Info
      index: 14,
      handicap: 34,

      premiumService: [
        { label: 'Access to Free Parking', value: 'Access to Free Parking' },
        {
          label: 'Access to Special Events & Tournaments',
          value: 'Access to Special Events & Tournaments',
        },
        { label: 'Access to VIP Lounge', value: 'Access to VIP Lounge' },
      ],
      premiumMerchandise: [
        { label: 'Personalized Golf carts', value: 'Personalized Golf Carts' },
        {
          label: '2 pairs of Golf wears monthly',
          value: '2 pairs of Golf wears monthly',
        },
        { label: 'Golf shoes spikes ', value: 'Golf shoes spikes ' },
      ],

      golfDays: [
        { label: 'Weekdays 12-4pm', value: 'Weekdays 12-4pm' },
        {
          label: 'Fridays-Sundays 12-4pm',
          value: 'Fridays-Sundays 12-4pm',
        },
        { label: 'Sundays only 12-7pm', value: 'Sundays only 12-7pm' },
      ],

      // Emergency Contact Info
      contactName: 'Segun',
      relationship: 'Friend',
      contactNumber: '09052916792',
      contactEmail: 'contact@example.com',
    },
    resolver: zodResolver(FormDataSchema),
  });

  const control = form.control;
  const errors = form.formState.errors;
  const trigger = form.trigger;

  const processForm = (data: FieldValues) => {
    const payload = {
      name: data.firstName,
      email: data.email,
      metadata: { data },
    };

    console.info('@Request', data);
    toast.info('Processing Payment');
    initializePayment({ payload, paymentMethod });

    if (error) {
      toast.error(String(error) || 'Could not process your payment');
      console.error('@Response_error', error);
    }
  };

  const stepProps = {
    control,
    errors,
    setPaymentMethod,
  };

  const steps = [
    {
      label: 'Personal Details',
      content: <PersonalInfo {...stepProps} />,
      fields: [
        'firstName',
        'lastName',
        'phoneNumber',
        'email',
        'dateOfBirth',
        'gender',
        'occupation',
        'nin',
        'zip',
        'province',
        'address',
      ],
    },
    {
      label: 'Membership Details',
      content: <PremiumMembershipInfo {...stepProps} />,
      fields: [
        'index',
        'handicap',
        'premiumService',
        'premiumMerchandise',
        'golfDays',
      ],
    },
    {
      label: 'Emergency Contact',
      content: <EmergencyContactInfo {...stepProps} />,
      fields: ['contactName', 'relationship', 'contactNo', 'contactEmail'],
    },
    {
      label: 'Payment Info',
      content: <PremiumPaymentInfo {...stepProps} />,
      fields: [''],
    },
  ];
  const isFirstStep = stepper.step === 0;
  const isLastStep = stepper.step === steps.length - 1;
  const [stepCompleted, setStepCompleted] = React.useState(
    Array(steps.length).fill(false)
  );

  const next = async () => {
    const fields = steps?.[stepper.step]?.fields;

    const output = await trigger(fields as FieldName[], { shouldFocus: true });
    if (!output) return;

    if (isLastStep) {
      processForm(form.control._formValues);
    } else {
      stepper.next(undefined);
      const currentStepIndex = stepper.step;
      setStepCompleted((prev) => {
        const updatedSteps = [...prev];
        updatedSteps[currentStepIndex] = true;
        return updatedSteps;
      });
    }
  };

  const previous = () => {
    if (!isFirstStep) {
      stepper.previous(undefined);
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
                completed={stepCompleted[i]}
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
        <form className="lg:w-3/4">
          {steps?.[stepper.step]?.content}
          <div className="mt-16 flex justify-center gap-4">
            <Button
              type="button"
              variant="destructive"
              disabled={isLoading || isFirstStep}
              onClick={previous}
            >
              Previous
            </Button>
            <Button disabled={isLoading} type="button" onClick={next}>
              {isLoading && (
                <Icons.spinner
                  className="mr-2 h-4 w-4 animate-spin"
                  aria-hidden="true"
                />
              )}
              {isLastStep ? 'Proceed' : 'Next'}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
