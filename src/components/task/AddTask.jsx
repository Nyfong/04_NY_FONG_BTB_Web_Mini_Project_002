import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { DatePickerDemo } from "./DatePicker";
// import { SelectDemo } from "./SelectTag";
// import { Textarea } from "@/components/ui/textarea";
import FormTask from "./FormTask";

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
        <FormTask Id={workSpaceById?.workspaceId} />
      </DialogContent>
    </Dialog>
  );
}
