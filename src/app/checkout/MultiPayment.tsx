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
import {Hex} from "viem";
import {baseSepolia, scrollSepolia} from "wagmi/chains";
import {useCreateCalls} from "@/services/payment";

interface MultiPaymentProps {
    reciptAddr: string;
    referralAddr: string;
    percent: string;
    totalAmount: string;
}

const MultiPayment: React.FC<MultiPaymentProps> = ({
    reciptAddr,
    referralAddr,
    percent,
    totalAmount,
}) => {
    const createCalls = useCreateCalls();

    return (
        <div>
            <Transaction
                chainId={baseSepolia.id}
                calls={createCalls({
                    reciptAddr: reciptAddr as Hex,
                    referralAddr: referralAddr as Hex,
                    percent,
                    totalAmount,
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
