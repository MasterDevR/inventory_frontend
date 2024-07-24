import { create } from "zustand";

const useStore = create((set) => ({
  isDisplaySupplyModal: false,
  showSidebar: true,
  userData: [],
  addSupplyData: [],
  role: null,
  isLogin: false,
  toggleSidebar: () => set((state) => ({ showSidebar: !state.showSidebar })),
  setIsLogin: (bool) => set(() => ({ isLogin: bool })),
  removeLogin: (bool) => set(() => ({ isLogin: bool })),
  setUserData: (data) => set(() => ({ userData: data })),
  setUserRole: (userRole) => set(() => ({ role: userRole })),
  setsAddSupplyData: (data) =>
    set((state) => ({ addSupplyData: [...state.addSupplyData, data] })),
  overrideSupplyData: (data) => set(() => ({ addSupplyData: data })),
  clearAddSupplyData: () => set(() => ({ addSupplyData: [] })),
  toggleSupplyModal: (bool) => set(() => ({ isDisplaySupplyModal: bool })),
}));

export default useStore;
