import { Header } from '@/components/headers';
import { Card } from '@/components/ui/card';
import { markdownContent } from '@/config/site';
import * as React from 'react';

import ReactMarkdown from 'react-markdown';

function Page() {
  return (
    <section className="flex flex-col gap-12 ">
      <Header
        title="Terms and Conditions"
        category="Your one stop registration portal"
        src="/book.svg"
        desc="Discover the world of joining a community filled with golf lovers, With services that suits your needs."
        navigate={true}
      />
      <Card className="p-6 md:px-12">
        <ReactMarkdown className="  space-y-8">{markdownContent}</ReactMarkdown>
      </Card>
    </section>
  );
}

export default Page;
