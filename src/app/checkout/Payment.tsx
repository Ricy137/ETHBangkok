"use client";

import {useCallback} from "react";
import {
    Checkout,
    CheckoutButton,
    CheckoutStatus,
    LifecycleStatus,
} from "@coinbase/onchainkit/checkout";

const Payment: React.FC<{productId: string}> = ({productId}) => {
    const handleStatusChange = useCallback((status: LifecycleStatus) => {
        console.log("onStatus", status);
    }, []);

    return (
        <div className="max-w-[500px]">
            <Checkout onStatus={handleStatusChange} productId={productId}>
                <CheckoutButton text="Make a payment" coinbaseBranded />
                <CheckoutStatus />
            </Checkout>
        </div>
    );
};

export default Payment;
