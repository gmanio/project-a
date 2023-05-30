import { atom } from "jotai";

const siteAtom = atom<any>([]);
export const currentSite = atom<null | string>(null);

export const siteListAtom = atom(
  (get) => get(siteAtom),
  async (get, set, payload: any[]) => {
    set(siteAtom, (prev: any[]) => [...payload]);
  }
);
