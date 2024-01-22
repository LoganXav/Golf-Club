import { Input } from "@/components/ui/input"

type Props = {}

function StandardForm({}: Props) {
  return (
    <div className="w-full">
      <Input placeholder="What is your username?" />
    </div>
  )
}

export default StandardForm
