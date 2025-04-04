"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import React, { useState } from "react";
import { SelectDemo } from "./SelectTag";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import { editTaskAction } from "@/actions/task-action";

// export function PopupUpdate({ taskId, workSpaceById, taskTitle }) {
//   console.log("LLLLLLLLLLLLLLLLLLL", taskId);
//   console.log("PPPPPPPPPPPPPPPPPPP", taskTitle);
//   console.log("RRRRRRRRRRRRRRRRRRR", workSpaceById);
//   const [selectedTag, setSelectedTag] = useState(""); // State to track the selected tag
//   const handleTagChange = (value) => {
//     setSelectedTag(value); // Update the state when the selection changes
//     console.log("Selected Tag:", value); // Optional: Log the selected value
//   };
//   return (
//     <AlertDialog>
//       <AlertDialogTrigger asChild>
//         <Button variant="outline" className="bg-green-500 text-white">
//           edit my task
//         </Button>
//       </AlertDialogTrigger>
//       <AlertDialogContent className="bg-white">
//         <AlertDialogHeader>
//           <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
//           <AlertDialogDescription>
//             This action cannot be undone. This will permanently delete your task
//             and remove your data from our servers.
//           </AlertDialogDescription>
//         </AlertDialogHeader>
// <form className="grid gap-4 py-4" action={editTaskAction}>
//   <div className="grid grid-cols-1 items-center gap-4">
//     <Label htmlFor="name" className="text-right">
//       Title
//     </Label>
//     <Input id="name" name="taskTitle" className="col-span-3" />
//   </div>
//   <div className="grid grid-cols-1 items-center gap-4">
//     <Label htmlFor="username" className="text-right">
//       tag
//     </Label>
//     <SelectDemo value={selectedTag} onChange={handleTagChange} />
//     {/* Hidden Input for Form Submission */}
//     <input type="hidden" id="tag" name="tag" value={selectedTag} />
//     {/* <Input id="username" className="col-span-3" /> */}
//   </div>
//   <div className="grid grid-cols-1 items-center gap-4">
//     <Label htmlFor="username" className="text-right">
//       date
//     </Label>
//     {/* <Input id="username" name="endDate" className="col-span-3" /> */}
//     <input
//       type="date"
//       className="border-1 p-2 rounded-lg"
//       id="birthday"
//       name="endDate"
//     />
//     {/* <div className="w-full">
//     <DatePickerDemo />
//   </div> */}
//   </div>
//   <div className="grid grid-cols-1 items-center gap-4">
//     <Label htmlFor="username" className="text-right">
//       Description
//     </Label>
//     <Textarea
//       name="taskDetails"
//       placeholder="Type your message here."
//     />
//     {/* <Input id="username" className="col-span-3" /> */}
//     <input
//       type="hidden"
//       id="workspaceId"
//       name="workspaceId"
//       value={workSpaceById?.workspaceId} // Automatically includes the workspaceId in the form data
//     />
//     <input
//       type="hidden"
//       id="taskId"
//       name="taskId"
//       value={taskId} // Automatically includes the workspaceId in the form data
//     />
//   </div>
//   <div className="flex items-center justify-end gap-3">
//     <Button className="bg-red-400 text-white">Cancel</Button>
//     <Button type="submit" className="bg-green-400 text-white">
//       Save changes
//     </Button>
//   </div>
// </form>
//       </AlertDialogContent>
//     </AlertDialog>
//   );
// }

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

export function PopupUpdate({ taskId, workSpaceById, taskTitle }) {
  const [selectedTag, setSelectedTag] = useState(""); // State to track the selected tag
  const handleTagChange = (value) => {
    setSelectedTag(value); // Update the state when the selection changes
    console.log("Selected Tag:", value); // Optional: Log the selected value
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4" action={editTaskAction}>
          <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <Input id="name" name="taskTitle" className="col-span-3" />
          </div>
          <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              tag
            </Label>
            <SelectDemo value={selectedTag} onChange={handleTagChange} />
            {/* Hidden Input for Form Submission */}
            <input type="hidden" id="tag" name="tag" value={selectedTag} />
            {/* <Input id="username" className="col-span-3" /> */}
          </div>
          <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              date
            </Label>
            {/* <Input id="username" name="endDate" className="col-span-3" /> */}
            <input
              type="date"
              className="border-1 p-2 rounded-lg"
              id="birthday"
              name="endDate"
            />
            {/* <div className="w-full">
            <DatePickerDemo />
          </div> */}
          </div>
          <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Description
            </Label>
            <Textarea
              name="taskDetails"
              placeholder="Type your message here."
            />
            {/* <Input id="username" className="col-span-3" /> */}
            <input
              type="hidden"
              id="workspaceId"
              name="workspaceId"
              value={workSpaceById?.workspaceId} // Automatically includes the workspaceId in the form data
            />
            <input
              type="hidden"
              id="taskId"
              name="taskId"
              value={taskId} // Automatically includes the workspaceId in the form data
            />
          </div>
          <div className="flex items-center justify-end gap-3">
            <Button className="bg-red-400 text-white">Cancel</Button>
            <Button type="submit" className="bg-green-400 text-white">
              Save changes
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
