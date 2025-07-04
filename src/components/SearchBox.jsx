import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { X, Search } from "lucide-react";
import useModelFilterStore from "../stores/modelFilterStore";

function SearchBox() {
  const [query, setQuery] = useState("");
  const setSearchTerm = useModelFilterStore((state) => state.setSearchTerm);

  const handleSearch = () => {
    setSearchTerm(query);
  };
  const handleEnterKey = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      e.preventDefault();
      handleSearch();
    }
  };

  const handleClear = () => {
    setQuery("");
    setSearchTerm("");
  };
  return (
    <div className="flex items-center gap-2 w-full max-w-xs rounded-md border border-input ">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => handleSearch()}
        className="rounded-md bg-muted"
      >
        <Search className="w-4 h-4 text-muted-foreground" />
      </Button>

      <Input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => handleEnterKey(e)}
        placeholder="Search..."
        className="dark:bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 px-2"
      />

      {query && (
        <Button
          variant="ghost"
          size="icon"
          onClick={handleClear}
          className="rounded-full"
        >
          <X className="w-4 h-4 text-muted-foreground" />
        </Button>
      )}
    </div>
  );
}

export default SearchBox;
