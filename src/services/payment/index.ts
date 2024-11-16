import {useCallback} from "react";
import {Hex, parseEther} from "viem";
import {COMMERCE_API_URL, COINBASE_COMMERCE_API_KEY} from "@/utils/constants";

export type Price = {
    amount: string;
    currency: string;
};

export type ChargeDetails = {
    name?: string;
    description?: string;
    pricing_type?: string;
    local_price?: Price;
};

export type CallDetails = {
    reciptAddr: Hex;
    referralAddr: Hex;
    percent: string;
    totalAmount: string;
};

export const useCreatePayment = () => {
    const createPayment = useCallback(async (price: Price) => {
        const chargeDetails: ChargeDetails = {
            name: "Test",
            description: "Test",
            pricing_type: "fixed_price",
            local_price: price,
        };
        try {
            const res = await fetch(`${COMMERCE_API_URL}/charges`, {
                method: "POST",
                body: JSON.stringify(chargeDetails),
                headers: {
                    "Content-Type": "application/json",
                    "X-CC-Api-Key": COINBASE_COMMERCE_API_KEY,
                },
            });
            const {data} = await res.json();
            return data.id;
        } catch (e) {
            console.log(e);
        }
    }, []);

    return createPayment;
};

export const useCreateCalls = () => {
    const createCalls = useCallback(
        ({reciptAddr, referralAddr, percent, totalAmount}: CallDetails) => {
            const amount = parseFloat(totalAmount);
            const percentNumb = parseInt(percent);
            const merchantProfit = (amount * percentNumb) / 100;
            return [
                {
                    to: reciptAddr,
                    value: parseEther(merchantProfit.toString()),
                },
                {
                    to: referralAddr,
                    value: parseEther((amount - merchantProfit).toString()),
                },
            ];
        },
        []
    );
    return createCalls;
};
