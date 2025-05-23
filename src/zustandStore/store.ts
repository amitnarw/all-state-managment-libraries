import { create } from "zustand";

interface StoreType {
  count: number;
  theme: string;
  increment: () => void;
  decrement: () => void;
  setTheme: (theme: string) => void;
}

const useStore = create<StoreType>((set) => ({
  count: 0,
  theme: "light",
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  setTheme: (theme) => {
    set(() => ({ theme }));
    if (theme === "light") {
      window.document.documentElement.classList.remove("dark");
    } else {
      window.document.documentElement.classList.add("dark");
    }
  },
}));

export default useStore;
