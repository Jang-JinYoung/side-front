import { create } from "zustand";

interface IPopupStore {
  isOpen: boolean;
  message: string;
  toggle: () => void;
}

const usePopupStroe = create<IPopupStore>((set) => ({
  isOpen: false,
  message: "",
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default usePopupStroe;
