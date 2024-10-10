import { create } from 'zustand';
import { productType } from '../util/constants';

export const useFilterType = create((set) => ({
  filter: productType.all,
  update: (newFilter) => set(() => ({ filter: newFilter })),
}));
