"use client";

import {useSearchParams} from "next/navigation";
import Payment from "./Payment";
import MultiPayment from "./MultiPayment";

const PaymentWrapper: React.FC = () => {
    const searchParams = useSearchParams();
    const reciptAddr = searchParams.get("merchantAddr");
    const referralAddr = searchParams.get("referralAddr");
    const percent = searchParams.get("percent");
    const totalAmount = searchParams.get("totalAmount");
    const productId = searchParams.get("productId");

    if (!reciptAddr || !referralAddr || !percent || !totalAmount)
        return <ErrorBoundary />;
    if (percent !== "0")
        return (
            <MultiPayment
                reciptAddr={reciptAddr}
                referralAddr={referralAddr}
                percent={percent}
                totalAmount={totalAmount}
            />
        );
    if (!productId) return <ErrorBoundary />;
    return <Payment productId={productId} />;
};

export default PaymentWrapper;

const ErrorBoundary: React.FC = () => {
    return <div> Sorry wrong url</div>;
};
