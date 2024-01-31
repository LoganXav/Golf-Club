import { Header } from '@/components/headers';

import { StandardCard } from '@/components/cards';
import { PremiumCard } from '@/components/cards';

export default function IndexPage() {
  return (
    <>
      <main className="flex flex-col items-center space-y-16 mx-auto">
        <Header
          tabs={false}
          title="Golf Membership "
          category="Your one stop registration portal"
          src="/golf-course.svg"
          desc="Discover the world of joining a community filled with golf lovers, With services that suits your needs."
        />
        <div className="w-full grid lg:grid-cols-2 gap-4">
          <PremiumCard />
          <StandardCard />
        </div>
      </main>
    </>
  );
}
