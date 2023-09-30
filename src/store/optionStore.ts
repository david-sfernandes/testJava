import { create } from "zustand";

interface OptionStore {
  currentOption: string;
  setOption: (value: string) => void;
}

export const useOptionStore = create<OptionStore>((set) => ({
  currentOption: "ALL",
  setOption: (value: string) => set((state) => ({ currentOption: value })),
}));
