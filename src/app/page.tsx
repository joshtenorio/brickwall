import { Button } from "~/components/ui/button";

export default function HomePage() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-y-4">
      <div className="text-4xl">brickwall</div>
      <Button>Start a new chat</Button>
    </div>
  );
}
