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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function AddTask({ workSpaceById }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          variant="outline"
          className="text-white border-0 shadow-sm rounded-full bg-blue-400 p-3"
        >
          + New Task
        </button>
      </DialogTrigger>
      <DialogContent className="bg-white sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add your new task</DialogTitle>
          <DialogTitle>{workSpaceById?.workspaceId}</DialogTitle>

          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <Input id="name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              tag
            </Label>
            <Input id="username" className="col-span-3" />
          </div>
          <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              date
            </Label>
            <Input id="username" className="col-span-3" />
          </div>
          <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Description
            </Label>
            <Input id="username" className="col-span-3" />
            <input
              type="hidden"
              id="workspaceId"
              name="workspaceId"
              value={workSpaceById?.workspaceId} // Automatically includes the workspaceId in the form data
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
