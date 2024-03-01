import { Header } from '@/components/headers';
import { PlanCard } from '@/components/cards';

export default function IndexPage() {
  const options = [
    {
      title: 'Premium',
      price: '$10',
      header: 'Exclusive golf experience',
      content:
        'Unlock premium features and privileges with our premium membership.',
      src: '/premium.svg',
      plan: 'premium',
      href: '/register?formType=premium',
    },
    {
      title: 'Standard',
      price: '$0',
      header: 'Explore the world of golf',
      content:
        'For this package, you can register your details and get standard golf.',
      src: '/standard.svg',
      plan: 'free',
      href: '/register?formType=standard',
    },
  ];
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
          {options.map(({ title, price, header, content, src, plan, href }) => (
            <PlanCard
              key={plan}
              title={title}
              price={price}
              header={header}
              content={content}
              src={src}
              plan={plan}
              href={href}
            />
          ))}
        </div>
      </main>
    </>
  );
}
