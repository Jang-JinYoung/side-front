import { create } from 'zustand';

interface UserStore {
  user?: string;
  login: (user: string) => void;
  logout: () => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: undefined,
  login: (user) => set(() => ({ user: user })),
  logout: () => set(() => ({ user: undefined })),

  // initUser: ()
}));

export default useUserStore;
