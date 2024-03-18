'use client';

import { useSearchParams } from 'next/navigation';
import { PremiumForm, StandardForm } from '.';

export function RegistrationForm() {
  const searchParams = useSearchParams();

  const formType = searchParams.get('formType');
  return <>{formType === 'standard' ? <StandardForm /> : <PremiumForm />}</>;
}
