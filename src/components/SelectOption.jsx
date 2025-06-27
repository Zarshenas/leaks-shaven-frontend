import React from 'react'
import { Select ,SelectGroup, SelectItem, SelectTrigger, SelectValue ,SelectContent,   } from './ui/select'

function SelectOption() {
  return (
    <Select defaultValue="All">
      <SelectTrigger className="w-[180px]">
        <SelectValue/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="All">All</SelectItem>
          <SelectItem value="ONLYFANS">ONLYFANS</SelectItem>
          <SelectItem value="PPVS">PPVS</SelectItem>
          <SelectItem value="SNAPCHAT">SNAPCHAT</SelectItem>
          <SelectItem value="BIGFOLDERS">BIG FOLDERS</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default SelectOption