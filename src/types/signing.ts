import { Hex } from 'viem';

export interface IAttestationSchema {
    address: Hex | undefined;
    amount: number;
    percentage: number;
    merchId: string
}

export interface ISignSchema {
    name: string;
    type: string;
    label?: string
    display?: boolean
}

export interface ISignSchemaResponse {
    schemaId: string;
    txHash: Hex | string;
}

export interface IAttestationResponse {
    attestationId: string,
    txHash: Hex | string,
    indexingValue: string
}
