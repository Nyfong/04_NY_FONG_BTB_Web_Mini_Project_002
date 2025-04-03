import React from "react";
import { CalendarIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { PopupDelete } from "./PopupDelete";
import PopupUpdate from "./PopupUpdate";

export function HoverSettingTask({ taskId, workSpaceById, taskTitle }) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className="text-3xl">
          ...
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-fit bg-white">
        <div className="flex flex-col justify-between ">
          {/* delete */}
          <div>
            <div className="flex  flex-col items-center justify-between  gap-3">
              <PopupDelete
                taskId={taskId}
                workSpaceById={workSpaceById}
                taskTitle={taskTitle}
              />
              <PopupUpdate
                taskId={taskId}
                workSpaceById={workSpaceById}
                taskTitle={taskTitle}
              />
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
