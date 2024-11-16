"use client";
import {useEffect, FC} from "react";
import {useAtom, useSetAtom} from "jotai";
import {useAttestationClient} from "@/hooks/useAttestationClient";
import Input from "@/components/Input";
import {WrapperCard} from "@/components/Card";
import {schemaWithLabels} from "@/utils/constants";
import Button from "@/components/Button";
import {schemaIdAtom, manageFormAtom} from "@/services/management";
import {v4 as uuidV4} from "uuid";
import {useAccount} from "wagmi";
import {Hex} from "viem";
import {useModal} from "@/components/Modal";
import ResultModal from "./ResultModal";
import { sign } from "crypto";

const Merchant: FC = () => {
    const [schemaId, setSchemaId] = useAtom(schemaIdAtom);
    const setManageFormData = useSetAtom(manageFormAtom);
    const account = useAccount();
    const {showModal} = useModal({
        title: "Signed the contract successfully",
        content: <ResultModal />,
    });

    const {signSchema, attestSchema} = useAttestationClient();

    // useEffect(() => {
    //     const sign = async () => {
    //         // TODO: Test
    //         // const res = await signSchema(
    //         //     "ETHBKK_SCHEMA_" + new Date().getTime()
    //         // );
    //         // setSchemaId((res as any).schemaId);
    //         setSchemaId("testSchemaId");
    //     };
    //     if (!account) return;

    //     sign();
    // }, [account]);

    const handleSubmit = async (formData: FormData) => {
        if (typeof window === undefined) return;
        const merchantAddress = formData.get("merchantAddress");
        const payload = {
            amount: formData.get("amount"),
            merchantAddress,
            creatorAddress: formData.get("creatorAddress"),
            splitPercentage: formData.get("splitPercentage"),
            productId: formData.get("productId"),
            merchId: uuidV4(),
            token: "USDC",
        };
        const data = await signSchema(JSON.stringify(payload));
        //TODO: Not a good practice for Modal
        setManageFormData({
            merchantAddr: merchantAddress as string,
            referralAddr: formData.get("creatorAddress") as string,
            totalAmount: formData.get("amount") as string,
            percent: formData.get("splitPercentage") as string,
        });
        // TODO: Test
        const res = await attestSchema(
            // schemaId,
            JSON.stringify(payload),
            merchantAddress as string
        );
        showModal();
    };

    return (
        <section className="flex flex-col w-full h-full justify-center items-center">
            <h1 className="font-bold text-[21px]">Create referral link</h1>
            <WrapperCard>
                <form action={handleSubmit}>
                    {merchantForm(account.address)}
                    <Button type={"submit"}>Submit</Button>
                </form>
            </WrapperCard>
        </section>
    );
};

const merchantForm = (address: Hex | undefined) => {
    if (typeof window === undefined) return;
    return schemaWithLabels.map(
        (field) =>
            field.name !== "merchId" &&
            field.name !== "token" && (
                <div
                    key={field.name}
                    className={`w-full h-full py-[8px] ${
                        field.name === "token" ? "none" : "flex flex-col"
                    }`}
                >
                    <label htmlFor={field.name}>{field.label}</label>
                    <Input
                        type={field.type}
                        name={field.name}
                        value={
                            field.name === "merchantAddress"
                                ? address
                                : undefined
                        }
                    />
                </div>
            )
    );
};

export default Merchant;
