import { atom } from "jotai";
import { focusAtom } from "jotai-optics";

export type AppStore = {
  url: string;
};

const storeAtom = atom<AppStore>({
  url: "",
});
storeAtom.debugLabel = "@photobooth/storeAtom";

export const urlFocusAtom = focusAtom(storeAtom, (store) => store.prop("url"));
urlFocusAtom.debugLabel = "@photobooth/urlFocusAtom";
