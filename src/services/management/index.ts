import {atom} from "jotai";

interface ManageFormData {
    merchantAddr: string;
    referralAddr: string;
    totalAmount: string;
    percent: string;
}
export const manageFormAtom = atom<ManageFormData | null>(null);
export const schemaIdAtom = atom("");
