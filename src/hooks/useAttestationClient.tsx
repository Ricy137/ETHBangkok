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
import { privateKeyToAccount } from "viem/accounts";


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
    
    const signSchema = async (schemaName: string) => {
         const res = getClient()?.createSchema({
            name: schemaName,
            data: schema,
        });

        console.log(res);   
    
        return res;
    };
    
    const attestSchema = async (
        schemaId: string,
        payload: string,
        signer: string
    ) => {
        const data = JSON.parse(payload);
    
        return getClient()?.createAttestation({
            schemaId: schemaId,
            data,
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