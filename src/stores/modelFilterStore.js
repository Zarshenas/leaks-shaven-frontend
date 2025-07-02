import { create } from "zustand";

const useModelFilterStore = create((set) => ({
  searchTerm: "",
  category: "",
  tag: "",

  setSearchTerm: (searchTerm) => set({ searchTerm }),
  setCategory: (category) => set({ category }),
  setTag: (tag) => set({ tag }),

  clearSearchTerm: () => set({ searchTerm: "" }),
  clearCategory: () => set({ category: "" }),
  clearTag: () => set({ tag: "" }),
}));

export default useModelFilterStore;
