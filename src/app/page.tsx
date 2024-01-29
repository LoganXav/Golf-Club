import { StandardForm } from '@/components/forms';
import { HeaderTable } from '@/components/headers';
import { Icons } from '@/components/icons';
import { ThemeToggle } from '@/components/theme';
import { Button } from '@/components/ui/button';
import { Paper } from '@/components/ui/paper';

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

      <div className="w-full flex h-[300px] space-x-4">
        <Paper variant="success" className="w-full text-success-foreground">
          <div className="flex items-center gap-4 mx-auto mt-1">
            <div className="w-[80px] h-[80px] rounded-full bg-secondary"></div>
            <div className="w-[80px] h-[80px] rounded-full bg-secondary"></div>
            <div className="w-[80px] h-[80px] rounded-full bg-secondary"></div>
          </div>
        </Paper>
        <Paper variant="destructive" className="w-full"></Paper>
      </div>
    </main>
  );
}
