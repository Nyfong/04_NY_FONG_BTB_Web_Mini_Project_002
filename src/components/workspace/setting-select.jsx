import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ButtonDelete } from "./ButtonDelete";
import { editWorkSpaceById } from "@/service/workspace-service";
import { EditWorkSpaceAction } from "@/actions/workspace-action";
export function SheetDemo({ deleteId, item }) {
  console.log("boombastic", item);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="" className="border-0">
          ...
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-white p-2">
        <SheetHeader>
          <SheetTitle className="font-thin">
            Edit <span className="font-bold">"{item?.workspaceName}" </span>{" "}
            workspace{" "}
          </SheetTitle>
          {/* <SheetTitle>{deleteId} </SheetTitle> */}

          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <form className="grid gap-4 p-2 py-4" action={EditWorkSpaceAction}>
          <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" name="name" className="col-span-3" />
            {/* Hidden Input for workspaceId */}
            <input
              type="hidden"
              id="workspaceId"
              name="workspaceId"
              value={item?.workspaceId} // Automatically includes the workspaceId in the form data
            />
          </div>

          <div className="hidden">
            <ButtonDelete deleteId={deleteId} />
          </div>
        </form>

        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
