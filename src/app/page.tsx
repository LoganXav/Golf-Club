import { Header } from '@/components/headers';
import { Icons } from '@/components/icons';

import FreeChoice from '@/components/cards/free-choice';
import PaidChoice from '@/components/cards/paid-choice';

export default function IndexPage() {
  return (
    <>
      <main className="flex flex-col items-center space-y-16 mx-auto">
        <Header
          tabs={false}
          title="Golf Membership "
          category="Your one stop registration portal"
          icon={<Icons.box />}
          desc="Discover the world of joining a community filled with golf lovers, With services that suits your needs."
        />
        <div className="w-full grid lg:grid-cols-2 gap-4">
          <PaidChoice />
          <FreeChoice />
        </div>
      </main>
    </>
  );
}
