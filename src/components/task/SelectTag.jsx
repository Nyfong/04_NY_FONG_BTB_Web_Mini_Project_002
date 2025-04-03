import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectDemo({ value, onChange }) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a tag" />
      </SelectTrigger>
      <SelectContent className="bg-white">
        <SelectGroup>
          <SelectLabel>select tag</SelectLabel>
          <SelectItem value="DESIGN">DESIGN</SelectItem>
          <SelectItem value="HOMEWORK">HOMEWORK</SelectItem>
          <SelectItem value="ASSIGNMENT">ASSIGNMENT</SelectItem>
          <SelectItem value="DEPLOYMENT">DEPLOYMENT</SelectItem>
          <SelectItem value="GIT">GIT</SelectItem>
          <SelectItem value="DATABASE">DATABASE</SelectItem>
          <SelectItem value="MINI_PROJECT">MINI_PROJECT</SelectItem>
          <SelectItem value="DOCUMENTATION">DOCUMENTATION</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
