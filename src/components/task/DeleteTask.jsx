import React from "react";

export default function DeleteTask() {
  return (
    <div>
      <form action={deleteTaskAction}>
        Continue
        <input
          type="hidden"
          id="workspaceId"
          name="workspaceId"
          value={10} // Automatically includes the workspaceId in the form data
        />
        <input
          type="hidden"
          id="taskId"
          name="taskId"
          value={8080} // Automatically includes the workspaceId in the form data
        />
      </form>
    </div>
  );
}
