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

export function SheetDemo({ deleteId }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="" className="border-0">
          ...
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-white p-3">
        <SheetHeader>
          <SheetTitle>Edit profile </SheetTitle>
          <SheetTitle>{deleteId} </SheetTitle>

          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" className="col-span-3" />
          </div>
          <div className="">
            <ButtonDelete deleteId={deleteId} />
          </div>
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
