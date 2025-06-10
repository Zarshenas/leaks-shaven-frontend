import React from "react";
import data from "../../constants/data";
import ModelCard from "./ModelCard";
function ModelList() {
  console.log(data);
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6">
        {data.results.map((model, index) => (
          <ModelCard model={model} key={index} />
        ))}
      </div>
    </div>
  );
}

export default ModelList;
