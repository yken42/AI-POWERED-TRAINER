import { create } from 'zustand'

export const useUserInfo = create((set) => ({
    userInfo: {},
    setUserInfo: (userInfo) => set({ userInfo }),
})) 