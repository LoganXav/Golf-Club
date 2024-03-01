import { Header } from '@/components/headers';

import { StandardCard } from '@/components/cards';
import { PremiumCard } from '@/components/cards';
import { Card } from '@/components/cards/card';
import { Icons } from '@/components/icons';

export default function IndexPage() {
  return (
    <>
      <main className="mx-auto flex flex-col items-center space-y-16">
        <Header
          title="Golf Membership"
          category="Your one stop registration portal"
          src="/golf-course.svg"
          desc="Discover the world of joining a community filled with golf lovers, With services that suits your needs."
        />
        <div className="grid w-full gap-4 lg:grid-cols-2">
          <Card
            variant="destructive"
            title="Premium"
            price="$10"
            header="Exclusive golf experience"
            content="Unlock premium features and privileges with our premium membership."
            icon={<Icons.box />}
            src="/premium.svg"
            plan="Premium"
            href="/register?formType=premium"
          />
          <Card
            variant="success"
            title="Standard"
            price="$0"
            header="Explore the world of golf"
            content="For this package, you can register your details and get standard golf."
            icon={<Icons.box />}
            src="/standard.svg"
            plan="Free"
            href="/register?formType=standard"
          />
        </div>
      </main>
    </>
  );
}
