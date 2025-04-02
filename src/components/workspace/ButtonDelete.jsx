import { Button } from "@/components/ui/button";

export function ButtonDelete({ deleteId }) {
  console.log(deleteId);
  return (
    <Button variant="destructive" className="bg-red-500">
      remove workspace
    </Button>
  );
}
