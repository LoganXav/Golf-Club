import { StandardForm } from '@/components/forms';
import { Header } from '@/components/headers';

export default function Register() {
  return (
    <section className="space-y-16">
      <Header
        tabs={false}
        title="Golf Membership"
        category="Your one stop registration portal"
        src="/book.svg"
        desc="Discover the world of joining a community filled with golf lovers, With services that suits your needs."
      />
      <StandardForm />
    </section>
  );
}
