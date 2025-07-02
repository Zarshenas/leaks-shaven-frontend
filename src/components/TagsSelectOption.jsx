import React from "react";
import {
  Select,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "./ui/select";
import useModelFilterStore from "../stores/modelFilterStore";

function TagsSelectOption() {
  const tag = useModelFilterStore((state) => state.tag);
  const setTag = useModelFilterStore((state) => state.setTag);
  return (
    <Select
      onValueChange={setTag}
      defaultValue={tag ? tag : "all"}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="all">All Tags</SelectItem>
          <SelectItem value="onlyfanslastupdate">
            onlyfans last update
          </SelectItem>
          <SelectItem value="updated">Updated</SelectItem>
          <SelectItem value="megalink">Mega Link</SelectItem>
          <SelectItem value="ppv">PPV</SelectItem>
          <SelectItem value="onlyfansleak">Onlyfans Leak</SelectItem>
          <SelectItem value="leaked">Leaked</SelectItem>
          <SelectItem value="goddessbabe">Goddes Babe</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default TagsSelectOption;
