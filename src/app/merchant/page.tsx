'use client';
import {useEffect, FC, useState} from "react";
import {signSchema} from "@/utils/attestationClient";
import Input from "@/components/Input";
import {WrapperCard} from "@/components/Card";
import {FakeMerchant, FakeReferrer, schemaWithLabels} from "@/utils/constants";
import Button from "@/components/Button";
import {attestSchema} from "@/utils/attestationClient";
import { v4 as uuidV4 } from "uuid";

const Merchant: FC = () => {
    const [schemaId, setSchemaId] = useState<string>("");

    useEffect(() => {
        const sign = async () => {
            const res = await signSchema("Merchant");
            setSchemaId(res.schemaId);
        }
        // sign();
    }, []);

    const handleSubmit = async (formData: FormData) => {
        console.log(formData);
        const res = await attestSchema(
            schemaId,
            JSON.stringify({
                merchantAddress: formData.get("merchantAddress"),
                creatorAddress: formData.get("creatorAddress"),
                splitPercentage: formData.get("splitPercentage"),
                merchId: uuidV4(),
                tokens: formData.get("tokens"),
                amount: formData.get("amount")
            }),
            formData.get("merchantAddress")
        );
        console.log(res);
    }

    return (
        <section className="flex flex-col w-full h-full justify-center items-center">
            <h1 className="font-bold text-[21px]">
                Create referral link
            </h1>
            <WrapperCard>
                <form action={handleSubmit}>
                    {merchantForm}
                    <Button>
                        Attest
                    </Button>
                </form>
            </WrapperCard>
        </section>
    );
};

const merchantForm = schemaWithLabels.map((field) =>
        field.name !== "merchId" && (
            <div key={field.name} className="w-full h-full flex flex-col py-[8px]">
                <label htmlFor={field.name}>{field.label}</label>
                <Input type={field.type} name={field.name}
                       value={field.name === "merchantAddress" ? FakeMerchant.address : undefined}/>
            </div>
        )
)

export default Merchant;
