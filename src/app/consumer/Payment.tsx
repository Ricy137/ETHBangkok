"use client";
import {
    Checkout,
    CheckoutButton,
    CheckoutStatus,
} from "@coinbase/onchainkit/checkout";
import AuthCon from "@/modules/AuthCon";

const Payment: React.FC = () => {
    return (
        <Checkout productId="Tokreators">
            <CheckoutButton coinbaseBranded />
            <CheckoutStatus />
        </Checkout>
    );
};

export default Payment;
