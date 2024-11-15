import Payment from "./Payment";
import Swap from "./Swap";

const Consumer: React.FC = () => {
    return (
        <div className="flex gap-[24px] md:flex-row items-center">
            <Payment />
            <Swap />
        </div>
    );
};

export default Consumer;
