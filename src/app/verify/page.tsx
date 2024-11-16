'use client';
import { WrapperCard } from "@/components/Card";
import { retrieveAttestation } from "@/utils/attestationClient";
import { Suspense, useEffect } from "react";
import { useAccount } from "wagmi";
import { useSearchParams } from 'next/navigation'


const VerifyPage = () => {
    const acc = useAccount();
    const searchParams = useSearchParams();

    const schemaId = searchParams.get('schemaId');

    useEffect(() => {
        retrieveAttestation(acc.address, schemaId as string);
    },[acc]);

    return (
        <div className="flex lg:flex-col gap-[16px] items-center pb-[34px]">
            <Suspense>
                <h1 className="text-[2.1rem] font-bold">Verify your receipt</h1>
                <WrapperCard>
                </WrapperCard>
            </Suspense>
        </div>
    )
}

export default VerifyPage;