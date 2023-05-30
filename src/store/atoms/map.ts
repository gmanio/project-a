import { atom } from "jotai";

const naverMapAtom = atom<any>(null);

export const naverMap = atom(
  (get) => get(naverMapAtom),
  async (get, set, payload: any) => {
    set(naverMapAtom, (prev: any) => payload);
  }
);
