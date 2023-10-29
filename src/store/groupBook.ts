import { create } from "zustand";

interface GroupBookStore {
  groupId: number;
  bookId: number;
  setBookId: (bookId: number) => void;
  setGroupId: (groupId: number) => void;
}

export const useGroupBook = create<GroupBookStore>()((set, get) => ({
  bookId: 0,
  groupId: 0,
  setBookId: (bookId: number) => set(() => ({ bookId })),
  setGroupId: (groupId: number) => set(() => ({ groupId })),
}));
