interface User {
  uid: string;
  email: string;
  providerId: string;
  displayName: string;
  isAnonymous: boolean;
  emailVerified: boolean;
  photoURL: string | null;
  tenantId: string | null;
  phoneNumber: string | null;
}

interface UserStore extends User {
  clearUser: () => void;
  setUser: (user: User) => void;
}