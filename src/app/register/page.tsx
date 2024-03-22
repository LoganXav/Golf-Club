'use client';
import { RegistrationForm } from '@/components/forms/registration-form';
import { Header } from '@/components/headers';
import { Suspense } from 'react';

export default function Register() {
  return (
    <section className="space-y-16">
      <Header
        title="Golf Membership"
        category="Your one stop registration portal"
        src="/book.svg"
        desc="Discover the world of joining a community filled with golf lovers, With services that suits your needs."
        navigate={true}
      />
      <Suspense>
        <RegistrationForm />
      </Suspense>
    </section>
  );
}
