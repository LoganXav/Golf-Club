'use client';
import { StandardForm } from '@/components/forms';
import Premium from '@/components/forms/premium-form';
import { Header } from '@/components/headers';
import { useRouter } from 'next/navigation';

import { useSearchParams } from 'next/navigation';

export default function Register() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const formType = searchParams.get('formType');
  return (
    <section className="space-y-16">
      <Header
        title="Golf Membership"
        category="Your one stop registration portal"
        src="/book.svg"
        desc="Discover the world of joining a community filled with golf lovers, With services that suits your needs."
        navigate={true}
      />

      {formType === 'standard' ? (
        <StandardForm />
      ) : formType === 'premium' ? (
        <Premium />
      ) : (
        <p></p>
      )}
    </section>
  );
}
