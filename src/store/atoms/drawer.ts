import { atom } from "jotai";

const drawerAtom = atom<boolean>(false);

export const openDrawer = atom(
  (get) => get(drawerAtom),
  async (get, set, payload: boolean) => {
    set(drawerAtom, (prev: boolean) => payload);
  }
);
