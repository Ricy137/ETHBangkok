import {
    SignProtocolClient,
    SpMode,
    EvmChains
} from "@ethsign/sp-sdk";
import { privateKeyToAccount } from "viem/accounts";
import { Hex } from 'viem';
import { schema } from "@/utils/constants";

const client = new SignProtocolClient(
    SpMode.OnChain,
    {
        account: privateKeyToAccount(
            process.env?.NEXT_PUBLIC_DEV_PUBLIC_KEY as Hex
        ),
        chain: EvmChains.baseSepolia,
    }
);

export const signSchema = async (schemaName: string) => {
    return await client.createSchema({
        name: schemaName,
        data: schema
    })
}