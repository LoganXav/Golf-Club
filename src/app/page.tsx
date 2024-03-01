import { Header } from '@/components/headers';

import { StandardCard } from '@/components/cards';
import { PremiumCard } from '@/components/cards';

export default function IndexPage() {
  return (
    <>
      <main className="mx-auto flex flex-col items-center space-y-16">
        <Header
          title="Golf Membership"
          category="Your one stop registration portal"
          src="/book.svg"
          desc="Discover the world of joining a community filled with golf lovers, With services that suits your needs."
        />
        <div className="grid w-full gap-4 lg:grid-cols-2">
          <PremiumCard />
          <StandardCard />
        </div>
      </main>
    </>
  );
}
