import StandardForm from "@/components/forms/standard-form"
import { ThemeToggle } from "@/components/theme"

export default function IndexPage() {
  return (
    <main className="font-roboto flex flex-col items-center">
      <StandardForm />
      <div className="py-2" />

      <ThemeToggle />
    </main>
  )
}
