import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { zustandStorage } from "./mmkv";

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      displayName: "",
      email: "",
      emailVerified: false,
      isAnonymous: false,
      phoneNumber: null,
      photoURL: "",
      providerId: "firebase",
      tenantId: null,
      uid: "",
      setUser: (user: User) => set(() => {
        return {
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
          isAnonymous: user.isAnonymous,
          phoneNumber: user.phoneNumber,
          photoURL: user.photoURL,
          providerId: user.providerId,
          tenantId: user.tenantId,
          uid: user.uid,
        };
      }),
      clearUser: () =>
        set(() => ({
          displayName: "",
          email: "",
          emailVerified: false,
          isAnonymous: false,
          phoneNumber: null,
          photoURL: "",
          providerId: "firebase",
          tenantId: null,
          uid: "",
        })),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);
