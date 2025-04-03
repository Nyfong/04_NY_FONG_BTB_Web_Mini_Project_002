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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { deleteTaskAction } from "@/actions/task-action";
export function PopupDelete({ taskId, workSpaceById, taskTitle }) {
  console.log("LLLLLLLLLLLLLLLLLLL", taskId);
  console.log("PPPPPPPPPPPPPPPPPPP", taskTitle);
  console.log("RRRRRRRRRRRRRRRRRRR", workSpaceById);
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="bg-red-500 text-white">
          delete task
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your task
            and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>

          <form
            className="bg-red-400 text-white rounded-lg "
            action={deleteTaskAction}
          >
            <Label htmlFor="name" className="text-right"></Label>
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
            <Button type="submit">Delete now</Button>
          </form>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
