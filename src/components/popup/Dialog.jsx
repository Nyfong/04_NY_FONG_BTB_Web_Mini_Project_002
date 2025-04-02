import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FormWorkSpace from "./FormWorkSpace";
export function DialogDemo() {
  return (
    <div className="flex justify-end">
      <Dialog className="">
        <DialogTrigger asChild>
          <Button className="bg-[#eee] w-fit">+</Button>
        </DialogTrigger>
        <DialogContent className=" bg-white">
          <DialogHeader>
            <DialogTitle>Add new workspace</DialogTitle>
            <DialogDescription className="pt-2">
              Add your workspace here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-2">
            <FormWorkSpace />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
