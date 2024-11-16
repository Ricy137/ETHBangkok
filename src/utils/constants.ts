import { ISignSchema } from "@/types/signing";
import { SchemaItem } from "@ethsign/sp-sdk/dist/types";

export const FakeMerchant = "0x2E7A81e310ef354005fC125734665Ab691e1577B";
export const FakeReferrer = "0xA6725238a5f4Cf0253Ca0F59d2c3a1D9B6EcC27f";
export const FakePercent = "40";
export const COMMERCE_API_URL = "https://api.commerce.coinbase.com";
export const COINBASE_COMMERCE_API_KEY =
    process.env.NEXT_PUBLIC_COINBASE_COMMERCE_API_KEY ?? "";
export const usdcTestnetAddr = "0x036CbD53842c5426634e7929541eC2318f3dCF7e";

export const schema: SchemaItem[] = [
    {
        name: "amount", type: "string"
    },
    {
        name: "merchantAddress", type: "string"
    },
    {
        name: "creatorAddress", type: "string"
    },
    {
        name: "splitPercentage", type: "string"
    },
    {
        name: "merchId", type: "string"
    },
    {
        name: "token", type: "string"
    },
    {
        name: "productId", type: "string"
    },
]

export const schemaWithLabels = schema.map((field) => ({
    ...field,
    label: field.name.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase()),
})) as ISignSchema[]
