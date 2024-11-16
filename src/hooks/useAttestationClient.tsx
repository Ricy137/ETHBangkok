'use client';
import {
    SpMode,
    EvmChains,
    IndexService,
    SignProtocolClient
} from "@ethsign/sp-sdk";
import { schema } from "@/utils/constants";
import { Hex } from "viem";
import { useAccount } from "wagmi";
import { signMessage } from '@wagmi/core'
import { privateKeyToAccount } from "viem/accounts";
import { config } from "@/modules/Providers";


export const useAttestationClient = () => {

    const account = useAccount();
    
    const getClient = () => {
        if (typeof window === undefined) return;
        const client = new SignProtocolClient(SpMode.OnChain, {
            account: privateKeyToAccount("0x644fefdbfdb90d9b84ecfb651b5fada7dc8904447de41c8847d4735a4b4e8899"),
            chain: EvmChains.baseSepolia,
        });

        return client;
    };
    
    const signSchema = async (payload: string) => {
        //  const res = getClient()?.createSchema({
        //     name: schemaName,
        //     data: schema,
        // });
        const res = signMessage(config, {
            account: account.address,
            message: payload
        });
    
        return res;
    };
    
    const attestSchema = async (
        schemaId: string,
        payload: string,
        signer: string
    ) => {

        return getClient()?.createAttestation({
            schemaId: schemaId,
            data: JSON.parse(payload),
            indexingValue: signer.toLowerCase(),
        });
    };
    
    const retrieveAttestation = async (
        addr: Hex | string | undefined,
        schemaId: string,
     ) => {
        const indexService = new IndexService("testnet");
        
        const res = await indexService.queryAttestationList({
          schemaId: schemaId,
          attester: addr,
          page: 1,
          mode: "onchain",
          indexingValue: addr,
        });
    
        console.log(res);
        
        return {
          success: true,
          attestations: res?.rows,
        };   
    }

    return {
        signSchema,
        attestSchema,
        retrieveAttestation
    }
}