"use client";

import {useSearchParams} from "next/navigation";
import Payment from "./Payment";
import MultiPayment from "./MultiPayment";

const PaymentWrapper: React.FC = () => {
    const searchParams = useSearchParams();
    const reciptAddr = searchParams.get("reciptAddr");
    const referralAddr = searchParams.get("referralAddr");
    const percent = searchParams.get("percent");
    const totalAmount = searchParams.get("totalAmount");
    const productId = searchParams.get("productId");

    if (!reciptAddr || !referralAddr || !percent || !totalAmount || !productId)
        return <ErrorBoundary />;
    if (percent === "0") return <Payment productId={productId} />;
    return (
        <MultiPayment
            reciptAddr={reciptAddr}
            referralAddr={referralAddr}
            percent={percent}
            totalAmount={totalAmount}
        />
    );
};

export default PaymentWrapper;

const ErrorBoundary: React.FC = () => {
    return <div> Sorry wrong url</div>;
};
