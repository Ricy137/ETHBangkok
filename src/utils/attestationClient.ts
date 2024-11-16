import {SpMode, EvmChains, SignProtocolClient} from "@ethsign/sp-sdk";
import {schema} from "@/utils/constants";

const getClient = () => {
    if (typeof window === undefined) return;
    return new SignProtocolClient(SpMode.OnChain, {
        account: undefined,
        chain: EvmChains.baseSepolia,
    });
};

export const signSchema = async (schemaName: string) => {
    // if(window===)
    return await getClient()?.createSchema({
        name: schemaName,
        data: schema,
    });
};

export const attestSchema = async (
    schemaId: string,
    payload: string,
    signer: string
) => {
    const data = JSON.parse(payload);

    return await getClient()?.createAttestation({
        schemaId: schemaId,
        data,
        indexingValue: signer.toLowerCase(),
    });
};
