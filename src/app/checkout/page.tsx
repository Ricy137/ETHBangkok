import {Suspense} from "react";
import PaymentWrapper from "./PaymentWrapper";
import Swap from "./Swap";

const Consumer: React.FC = () => {
    return (
        <div className="flex gap-[40px] md:flex-row items-center">
            <Suspense>
                <PaymentWrapper />
            </Suspense>
            <Swap />
        </div>
    );
};

export default Consumer;
