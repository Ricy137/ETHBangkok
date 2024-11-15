import { Hex } from 'viem';

export interface IAttestationSchema {
    address: Hex | undefined;
    amount: number;
    percentage: number;
    merchId: string
}

export interface ISignSchemaResponse {
    schemaId: string;
    txHash: string;
}