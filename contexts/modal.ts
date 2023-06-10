import { atom } from "jotai";
import { ReactNode } from "react";

interface AtomProps {
    children: ReactNode;
    isOpen: boolean;
}

export const ModalAtom = atom<AtomProps | null>(null)