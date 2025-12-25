import { create } from 'zustand';
import type { Page, NavigationState } from '../types';

export const useNavigationStore = create<NavigationState>((set) => ({
  page: 1,
  totalPages: 5,
  goNext: () => set((state) => {
    if (state.page < state.totalPages) {
      return { page: (state.page + 1) as Page };
    }
    return state;
  }),
  goPrev: () => set((state) => {
    if (state.page > 1) {
      return { page: (state.page - 1) as Page };
    }
    return state;
  }),
  goHome: () => set({ page: 1 }),
  goToPage: (page: Page) => set({ page }),
}));


