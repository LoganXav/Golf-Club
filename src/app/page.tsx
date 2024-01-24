import { StandardForm } from '@/components/forms';
import { HeaderTable } from '@/components/headers';
import { ThemeToggle } from '@/components/theme';
import { Button } from '@/components/ui/button';

export default function IndexPage() {
  return (
    <main className="container px-4 flex flex-col items-center space-y-4 pt-24 mx-auto">
      <StandardForm />

      <ThemeToggle />

      <Button className="w-full">Continue</Button>

      <HeaderTable />
    </main>
  );
}
