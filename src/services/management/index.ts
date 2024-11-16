import {atom} from "jotai";

export interface ManageFormData {
    merchantAddr: string;
    referralAddr: string;
    totalAmount: string;
    percent: string;
    productId?: string;
}
export const manageFormAtom = atom<ManageFormData | null>(null);
export const schemaIdAtom = atom("");
