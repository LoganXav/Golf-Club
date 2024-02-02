import { StandardForm } from '@/components/forms';
import { Header } from '@/components/headers';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Paper } from '@/components/ui/paper';

export default function IndexPage() {
  return (
    <main className="container mx-auto flex flex-col items-center space-y-4 px-4 pt-24">
      <Header
        tabs="single"
        title="What will you build?"
        category="List"
        icon={<Icons.box />}
        desc="Discover pre-built examples of Tines in action to accelerate
                your story building."
      ></Header>

      <div className="flex w-full flex-col items-center gap-4 md:flex-row">
        <Paper
          variant="success"
          className="min-h-[300px] w-full text-success-foreground"
        >
          <div className="mx-auto mt-1 flex items-center gap-4">
            <div className="h-[80px] w-[80px] rounded-full bg-secondary"></div>
            <div className="h-[80px] w-[80px] rounded-full bg-secondary"></div>
            <div className="h-[80px] w-[80px] rounded-full bg-secondary"></div>
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
