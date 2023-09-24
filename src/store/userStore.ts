import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { zustandStorage } from "./mmkv";

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      email: "",
      id: "",
      name: "",
      profileImage: "",
      role: "",
      setUser: (user: User) => set(() => user),
      clearUser: () =>
        set(() => ({
          email: "",
          id: "",
          name: "",
          profileImage: "",
          role: "",
        })),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);