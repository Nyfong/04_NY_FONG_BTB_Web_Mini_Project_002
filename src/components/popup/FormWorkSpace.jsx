"use client";
import React from "react";
import { workSpaceAction } from "../../actions/workspace-action";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useActionState } from "react";

export default function FormWorkSpace() {
  const [state, functionAction, isPending] = useActionState(
    workSpaceAction,
    null
  );
  return (
    <div>
      <form className="grid  items-center gap-4" action={functionAction}>
        <Label htmlFor="name" className="text-right">
          Name
        </Label>

        <Input id="name" name="workspacename" />
        <p className="pl-2 text-sm">
          {state?.error && <span className="text-red-400">{state.error}</span>}
        </p>
        <div className="flex justify-end w-full ">
          <Button type="submit" className="bg-blue-500 text-white">
            {isPending ? "Loading" : "save"}
          </Button>
        </div>
      </form>
    </div>
  );
}
