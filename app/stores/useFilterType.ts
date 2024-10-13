import { create } from 'zustand';
import { productType } from '../util/constants';

interface FilterType {
  filter: string;
  update: (newFilter: string) => void;
}

export const useFilterType = create<FilterType>((set) => ({
  filter: productType.all,
  update: (newFilter) => set(() => ({ filter: newFilter })),
}));
