"use client";
import React, { useState } from "react";
import { SelectDemo } from "./SelectTag";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { taskAction } from "@/actions/task-action";
import { useActionState } from "react";
import toast from "react-hot-toast";

export default function FormTask({ Id }) {
  //   console.log("id-------------", Id);
  const [selectedTag, setSelectedTag] = useState(""); // State to track the selected tag
  //notifu
  const notify = () => toast("Here is your toast.");

  const handleTagChange = (value) => {
    setSelectedTag(value); // Update the state when the selection changes
    console.log("Selected Tag:", value); // Optional: Log the selected value
  };

  return (
    <div>
      <form className="grid gap-4 py-4" action={taskAction}>
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
          <Textarea name="taskDetails" placeholder="Type your message here." />
          {/* <Input id="username" className="col-span-3" /> */}
          <input
            type="hidden"
            id="workspaceId"
            name="workspaceId"
            value={Id} // Automatically includes the workspaceId in the form data
          />
        </div>
        <Button type="submit">Save changes</Button>
      </form>
    </div>
  );
}
