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
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription className="pt-2">
              Add your workspace here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-2">
            {/* <form
              className="grid grid-cols-4 items-center gap-4"
              action={workSpaceAction}
            >
              <Label htmlFor="name" name="workspaceName" className="text-right">
                Name
              </Label>
              <Input id="name" name="taskName" className="col-span-3" />
            </form> */}
            <FormWorkSpace />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
