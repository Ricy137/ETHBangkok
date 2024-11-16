'use client';
import {useEffect, FC, useState} from "react";
import {signSchema} from "@/utils/attestationClient";
import Input from "@/components/Input";
import {WrapperCard} from "@/components/Card";
import {schemaWithLabels} from "@/utils/constants";
import Button from "@/components/Button";
import {attestSchema} from "@/utils/attestationClient";
import { v4 as uuidV4 } from "uuid";
import { useAccount } from "wagmi";
import { Hex } from "viem";

const Merchant: FC = () => {
    const [schemaId, setSchemaId] = useState<string>("");
    const account = useAccount();

    useEffect(() => {
        const sign = async () => {
            const res = await signSchema(account.address + "_ETHBKK_SCHEMA");
            setSchemaId(res.schemaId);
        }
        sign();
    }, []);

    const handleSubmit = async (formData: FormData) => {
        const merchantAddress = formData.get("merchantAddress");
        const payload = {
            amount: formData.get("amount"),
            merchantAddress,
            creatorAddress: formData.get("creatorAddress"),
            splitPercentage: formData.get("splitPercentage"),
            merchId: uuidV4(),
            token: "USDC",
            }
        const res = await attestSchema(
            schemaId,
            JSON.stringify(payload),
            merchantAddress as string
        );
    }

    return (
        <section className="flex flex-col w-full h-full justify-center items-center">
            <h1 className="font-bold text-[21px]">
                Create referral link
            </h1>
            <WrapperCard>
                <form action={handleSubmit}>
                    {merchantForm(account.address)}
                    <Button type={"submit"}>
                        Submit
                    </Button>
                </form>
            </WrapperCard>
        </section>
    );
};

const merchantForm = (address: Hex | undefined) => {
    return schemaWithLabels.map((field) =>
        field.name !== "merchId" && field.name !== "token" && (
            <div key={field.name} className={`w-full h-full py-[8px] ${field.name === "token" ? "none" : "flex flex-col"}`}>
                <label htmlFor={field.name}>
                    {field.label}
                </label>
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
)
}

export default Merchant;
