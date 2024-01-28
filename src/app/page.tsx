import { StandardForm } from '@/components/forms';
import { HeaderTable } from '@/components/headers';
import { Icons } from '@/components/icons';
import { ThemeToggle } from '@/components/theme';
import { Button } from '@/components/ui/button';

export default function IndexPage() {
  return (
    <main className="container px-4 flex flex-col items-center space-y-4 pt-24 mx-auto">
      <StandardForm />

      <ThemeToggle />

      <div className="flex space-x-4">
        <Button variant="destructive">Cancel</Button>
        <Button className="">Next</Button>
      </div>

      <HeaderTable icon={<Icons.box />} />
    </main>
  );
}
