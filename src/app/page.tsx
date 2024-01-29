import { StandardForm } from '@/components/forms';
import { Header } from '@/components/headers';
import { Icons } from '@/components/icons';
import { ThemeToggle } from '@/components/theme';
import { Button } from '@/components/ui/button';
import { Paper } from '@/components/ui/paper';

export default function IndexPage() {
  return (
    <main className="container px-4 flex flex-col items-center space-y-4 pt-24 mx-auto">
      <ThemeToggle />
      <Header
        // type="tabs"
        tabs={true}
        title="What will you build?"
        category="List"
        icon={<Icons.box />}
        desc="Discover pre-built examples of Tines in action to accelerate
                your story building."
      />

      <div className="w-full flex flex-col items-center md:flex-row gap-4">
        <Paper
          variant="success"
          className="min-h-[300px] w-full text-success-foreground"
        >
          <div className="flex items-center gap-4 mx-auto mt-1">
            <div className="w-[80px] h-[80px] rounded-full bg-secondary"></div>
            <div className="w-[80px] h-[80px] rounded-full bg-secondary"></div>
            <div className="w-[80px] h-[80px] rounded-full bg-secondary"></div>
          </div>
        </Paper>
        <Paper variant="destructive" className="min-h-[300px] w-full"></Paper>
      </div>
      <StandardForm />

      <div className="flex space-x-4">
        <Button variant="destructive">Cancel</Button>
        <Button className="">Next</Button>
      </div>
    </main>
  );
}
