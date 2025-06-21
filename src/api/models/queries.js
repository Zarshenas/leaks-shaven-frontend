// import { useInfiniteQuery } from "@tanstack/react-query";
// import { getModels } from "./service";


// export const useModel = () => {
//   return useQuery({
//     queryKey: ["models"],
//     queryFn: getModels,
//     select: (res) => res.data,
//   });
// };

import { useInfiniteQuery } from "@tanstack/react-query";
import { getModels } from "./service";

const MODELS_PER_PAGE = 10;

export const useInfiniteModels = () => {
  return useInfiniteQuery({
    queryKey: ["models"],
    queryFn: ({ pageParam = 1 }) => getModels({ page: pageParam, limit: MODELS_PER_PAGE }),
    
    getNextPageParam: (lastPage) => {
      const totalPages = Math.ceil(lastPage.count / lastPage.page_size);
      
      if (lastPage.page < totalPages) {
        return lastPage.page + 1;
      }
      
      return undefined;
    },
    
    initialPageParam: 1, // Start fetching from the first page
  });
};