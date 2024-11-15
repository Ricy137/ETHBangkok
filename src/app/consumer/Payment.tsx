"use client";

import {useCallback} from "react";
import {
    Checkout,
    CheckoutButton,
    CheckoutStatus,
    LifecycleStatus,
} from "@coinbase/onchainkit/checkout";
import {FakeMerchant, FakeReferrer} from "@/utils/constants";
import {useCreatePayment} from "@/services/payment";

const Payment: React.FC = () => {
    const createPayment = useCreatePayment();

    const chargeHandler = useCallback(async () => {
        return createPayment({
            amount: "0.01",
            currency: "USD",
        });
    }, []);

    const handleStatusChange = useCallback((status: LifecycleStatus) => {
        console.log("onStatus", status);
    }, []);

    return (
        <div className="max-w-[500px]">
            <Checkout
                chargeHandler={chargeHandler}
                onStatus={handleStatusChange}
                // productId="11406fec-7737-494f-adf4-f2ffb8f198f6"
            >
                <CheckoutButton text="Make a payment" coinbaseBranded />
                {/* <CheckoutStatus /> */}
            </Checkout>
        </div>
    );
};

export default Payment;
