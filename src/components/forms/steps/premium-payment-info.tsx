import { Label } from '@/components/ui/label';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';

export default function PremiumPaymentInfo() {
  return (
    <div className="space-y-4">
      <Label>Select a payment option</Label>
      <div className="grid gap-4 lg:grid-cols-2">
        <Button
          type="button"
          className="flex min-w-[10rem] items-center justify-center rounded-md border bg-input py-8 shadow-none hover:border-primary"
        >
          <Icons.paystack className="w-36 lg:w-44" />
        </Button>

        <Button
          type="button"
          className="flex min-w-[10rem] items-center justify-center rounded-md border bg-input py-8 shadow-none hover:border-primary"
        >
          <Icons.flutterwave className="w-36 lg:w-44" />
        </Button>
      </div>
    </div>
  );
}
