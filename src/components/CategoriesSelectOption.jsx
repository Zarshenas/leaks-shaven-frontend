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

function CategoriesSelectOption() {
  const category = useModelFilterStore((state) => state.category);
  const setCategory = useModelFilterStore((state) => state.setCategory);
  return (
    <Select
      onValueChange={setCategory}
      defaultValue={category ? category : "all"}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="all">All Categories</SelectItem>
          <SelectItem value="ONLYFANS">ONLYFANS</SelectItem>
          <SelectItem value="PPVS">PPVS</SelectItem>
          <SelectItem value="SNAPCHAT">SNAPCHAT</SelectItem>
          <SelectItem value="BIGFOLDERS">BIG FOLDERS</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default CategoriesSelectOption;
