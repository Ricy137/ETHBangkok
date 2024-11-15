import { SchemaItem } from "@ethsign/sp-sdk/dist/types";

export const FakeMerchant = "0xA6725238a5f4Cf0253Ca0F59d2c3a1D9B6EcC27f";
export const FakeReferrer = "0xA6725238a5f4Cf0253Ca0F59d2c3a1D9B6EcC27f";

export const schema: SchemaItem[] = [
    {
        name: "amount", type: "string"
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
    },
    {
        name: "amount", type: "string"
    }
] 