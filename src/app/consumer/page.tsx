import Payment from "./Payment";
import MultiPayment from './MultiPayment';
import Swap from "./Swap";

const Consumer: React.FC = () => {
    return (
        <div className="flex gap-[24px] md:flex-row items-center">
            <MultiPayment />
            <Swap />
        </div>
    );
};

export default Consumer;
