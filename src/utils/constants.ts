import { SchemaItem } from "@ethsign/sp-sdk/dist/types";
import {privateKeyToAccount} from "viem/accounts";
import {ISignSchema} from "@/types/signing";

export const FakeMerchant = privateKeyToAccount(
    "0x644fefdbfdb90d9b84ecfb651b5fada7dc8904447de41c8847d4735a4b4e8899"
)
    //"0xA6725238a5f4Cf0253Ca0F59d2c3a1D9B6EcC27f";
export const FakeReferrer = "0xA6725238a5f4Cf0253Ca0F59d2c3a1D9B6EcC27f";

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
        name: "tokens", type: "string"
    }
]

export const schemaWithLabels = schema.map((field) => ({
    ...field,
    label: field.name.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase()),
})) as ISignSchema[]