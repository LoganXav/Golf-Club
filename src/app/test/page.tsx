import { DatePicker } from '@/components/date-picker';
import { StandardForm } from '@/components/forms';
import { Header } from '@/components/headers';
import { Icons } from '@/components/icons';
import { Checkbox } from '@/components/ui/checkbox';
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

      <DatePicker placeholder="Choose your Date of Birth" dateOfBirth={true} />

      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
      </div>
    </main>
  );
}
