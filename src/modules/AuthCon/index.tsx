"use client";
import {PropsWithChildren} from "react";
import {useAccount} from "wagmi";
import {ConnectWallet, Wallet} from "@coinbase/onchainkit/wallet";

const AuthCon: React.FC<PropsWithChildren> = ({children}) => {
    const {address} = useAccount();
    if (address) {
        return <>{children}</>;
    }

    return (
        <Wallet>
            <ConnectWallet />
        </Wallet>
    );
};

export default AuthCon;
