"use client";

import {
    Transaction,
    TransactionButton,
    TransactionStatus,
    TransactionStatusLabel,
    TransactionStatusAction,
    TransactionToast,
    TransactionToastIcon,
    TransactionToastLabel,
} from "@coinbase/onchainkit/transaction";
import {baseSepolia} from "wagmi/chains";
import {FakeMerchant, FakeReferrer, FakePercent} from "@/utils/constants";
import {useCreateCalls} from "@/services/payment";

const MultiPayment: React.FC = () => {
    const createCalls = useCreateCalls();

    return (
        <div>
            <Transaction
                chainId={baseSepolia.id}
                calls={createCalls({
                    reciptAddr: FakeMerchant,
                    referralAddr: FakeReferrer,
                    percent: FakePercent,
                    totalAmount: "0.01",
                })}
            >
                <TransactionButton text="Make the payment" />
                <TransactionStatus>
                    <TransactionStatusLabel />
                    <TransactionStatusAction />
                </TransactionStatus>
                <TransactionToast>
                    <TransactionToastIcon />
                    <TransactionToastLabel />
                </TransactionToast>
            </Transaction>
        </div>
    );
};

export default MultiPayment;
