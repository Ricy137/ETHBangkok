import {
    SignProtocolClient,
    SpMode,
    EvmChains
} from "@ethsign/sp-sdk";
import {FakeMerchant, schema} from "@/utils/constants";

const client = new SignProtocolClient(
    SpMode.OnChain,
    {
        account: FakeMerchant,
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
    contractDetails: string,
    signer: string
) => {
    const res = await client.createAttestation({
        schemaId: schemaId,
        data: {
            contractDetails,
            signer
        },
        indexingValue: signer.toLowerCase()
    });
}