import { Input } from "@/components/ui/input"

type Props = {}

export function StandardForm({}: Props) {
  return (
    <div className="w-full">
      <Input placeholder="What is your username?" />
    </div>
  )
}
