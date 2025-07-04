import React, { useEffect } from "react";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import ModelCard from "./ModelCard";
import { useInfiniteModels } from "../../api/models/queries";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import { Loader } from "../ui/Loader";
import { Badge } from "../ui/badge";
function ModelList() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  } = useInfiniteModels();
  const [ref, entry] = useIntersectionObserver({
    threshold: 0.1,
  });

  useEffect(() => {
    if (entry?.isIntersecting && hasNextPage && !isFetchingNextPage) {
      console.log("Observer triggered: Fetching next page...");
      fetchNextPage();
    }
  }, [entry, hasNextPage, isFetchingNextPage, fetchNextPage]);

  const allModels = data?.pages?.flatMap((page) => page.results) || [];

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6">
          {[...Array(10)].map((_, i) => (
            <Card key={`skeleton-${i}`} className="w-[350px]">
              <CardHeader>
                <Skeleton className="h-4 w-3/4 mb-4" />
                <Skeleton className="h-3 w-1/2" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-[400px] w-full" />
              </CardContent>
              <CardFooter>
                <Skeleton className="h-9 px-4 w-full" />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 text-red-600 text-center">
        Error loading models: {error.message}
      </div>
    );
  }
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6">
        {allModels.length > 0 ? (
          allModels.map((model, index) => (
            <ModelCard model={model} key={index} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No models found.
          </div>
        )}
      </div>

      <div ref={ref} className="py-8 text-center">
        {isFetchingNextPage ? (
          <Badge variant={"outline"} className="text-gray-600 text-md">
            <Loader />
            Loading more models...
          </Badge>
        ) : (
          <p className="text-gray-500">You've reached the end of the list!</p>
        )}
      </div>
    </div>
  );
}

export default ModelList;
