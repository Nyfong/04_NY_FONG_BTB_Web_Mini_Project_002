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

export default function StatusTask({ taskId, workSpaceById }) {
  // Handle the change event when a new status is selected
  const handleStatusChange = async (selectedStatus) => {
    // Call the patchTaskAction with the required parameters directly
    await patchTaskAction(taskId, workSpaceById, selectedStatus);
  };

  return (
    <div>
      <Select onValueChange={handleStatusChange}>
        <SelectTrigger className="w-36 truncate border-watermelon-red text-watermelon-red">
          <SelectValue placeholder="NOT_STARTED" />
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
