import { StandardForm } from '@/components/forms';
import { Header } from '@/components/headers';
import { Icons } from '@/components/icons';

export default function Register() {
  return (
    <section className="space-y-16">
      <Header
        tabs={false}
        title="Golf Membership"
        category="Your one stop registration portal"
        icon={<Icons.box />}
        desc="Discover the world of joining a community filled with golf lovers, With services that suits your needs."
      />
      <StandardForm />
    </section>
  );
}
