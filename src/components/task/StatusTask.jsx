"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { patchTaskAction } from "@/actions/task-action";

export default function StatusTask({
  taskId,
  workSpaceById,
  status,
  color,
  textcolor,
}) {
  // Handle the change event when a new status is selected
  const handleStatusChange = async (selectedStatus) => {
    //with the required parameters directly
    await patchTaskAction(taskId, workSpaceById?.workspaceId, selectedStatus);
  };

  return (
    <div>
      <Select onValueChange={handleStatusChange}>
        <SelectTrigger
          className={`w-36 truncate  text-watermelon-red  ${color}  ${textcolor}`}
        >
          <SelectValue placeholder={`${status}`} />
        </SelectTrigger>
        <SelectContent className="bg-white border-0">
          <SelectItem value="NOT_STARTED">NOT_STARTED</SelectItem>
          <SelectItem value="IN_PROGRESS">IN_PROGRESS</SelectItem>
          <SelectItem value="FINISHED">FINISHED</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
