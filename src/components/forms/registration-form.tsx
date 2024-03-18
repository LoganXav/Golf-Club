'use client';

import { useSearchParams } from 'next/navigation';
import { PremiumForm, StandardForm } from '.';
import { Suspense } from 'react';

export function RegistrationForm() {
  const searchParams = useSearchParams();

  const formType = searchParams.get('formType');
  return (
    <>
      <Suspense>
        {formType === 'standard' ? <StandardForm /> : <PremiumForm />}
      </Suspense>
    </>
  );
}
