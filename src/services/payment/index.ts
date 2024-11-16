import {useCallback} from "react";
import {Hex, parseUnits, encodeFunctionData} from "viem";
import {
    COMMERCE_API_URL,
    COINBASE_COMMERCE_API_KEY,
    usdcTestnetAddr,
} from "@/utils/constants";
import {usdcABI} from "@/utils/abis/usdcABI";

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
                    to: usdcTestnetAddr as Hex,
                    data: getEncodeData(reciptAddr, merchantProfit),
                },
                {
                    to: usdcTestnetAddr as Hex,
                    data: getEncodeData(referralAddr, amount - merchantProfit),
                },
            ];
        },
        []
    );
    return createCalls;
};

export const getEncodeData = (receiver: Hex, amount: number) => {
    return encodeFunctionData({
        abi: usdcABI,
        functionName: "transfer",
        args: [receiver, parseUnits(amount.toString(), 6)],
    });
};
