import StandardForm from "@/components/forms/standard-form"
import { ThemeToggle } from "@/components/theme"
import { Button } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <main className="font-roboto w-1/3 flex flex-col items-center space-y-4 pt-24 mx-auto">
      <StandardForm />

      <ThemeToggle />

      <Button className="w-full">Continue</Button>
    </main>
  )
}
