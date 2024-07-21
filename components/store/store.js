import { create } from "zustand";

const useStore = create((set) => ({
  showSidebar: true,
  userData: [],
  role: null,
  isLogin: false,
  toggleSidebar: () => set((state) => ({ showSidebar: !state.showSidebar })),
  setIsLogin: (bool) => set(() => ({ isLogin: bool })),
  removeLogin: (bool) => set(() => ({ isLogin: bool })),
  setUserData: (data) => set(() => ({ userData: data })),
  setUserRole: (userRole) => set(() => ({ role: userRole })),
}));

export default useStore;
