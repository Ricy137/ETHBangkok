import {
    SpMode,
    EvmChains,
    SignProtocolClient,
} from "@ethsign/sp-sdk";
import { schema } from "@/utils/constants";


const client = new SignProtocolClient(
    SpMode.OnChain,
    {
        account: undefined,
        chain: EvmChains.baseSepolia,
    }
);

export const signSchema = async (schemaName: string) => {
    return await client.createSchema({
        name: schemaName,
        data: schema
    })
}

export const attestSchema = async (
    schemaId: string,
    payload: string,
    signer: string
) => {
    const data = JSON.parse(payload);

    return await client.createAttestation({
        schemaId: schemaId,
        data,
        indexingValue: signer.toLowerCase()
    });
}