import { useInfiniteQuery } from "@tanstack/react-query";
import { getModels } from "./service";
import useModelFilterStore from "../../stores/modelFilterStore";

const MODELS_PER_PAGE = 10;

export const useInfiniteModels = () => {
  const { searchTerm, category, tag } = useModelFilterStore();

  return useInfiniteQuery({
    queryKey: ["models", searchTerm, category, tag],
    queryFn: ({ pageParam = 1 }) =>
      getModels({
        page: pageParam,
        limit: MODELS_PER_PAGE,
        search: searchTerm,
        category,
        tag,
      }),

    getNextPageParam: (lastPage) => {
      if (lastPage.next) {
        const url = new URL(lastPage.next);
        const nextPage = url.searchParams.get("page");
        return Number(nextPage);
      }
      return undefined;
    },

    initialPageParam: 1, // Start fetching from the first page
  });
};
