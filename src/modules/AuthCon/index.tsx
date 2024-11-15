import {PropsWithChildren} from "react";
import {ConnectWallet, Wallet} from "@coinbase/onchainkit/wallet";

const AuthCon: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <Wallet>
            <ConnectWallet>{children}</ConnectWallet>
        </Wallet>
    );
};

export default AuthCon;
