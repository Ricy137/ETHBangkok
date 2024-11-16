import {useAtomValue} from "jotai";
//TODO: Not a good idea
import {manageFormAtom} from "@/services/management";
const ResultModal: React.FC = () => {
    const manageFormData = useAtomValue(manageFormAtom);

    return (
        <div className="p-[24px] flex flex-col gap-[20px] text-[#fff] break-words">
            <div className='break-words'>
                http://localhost:3000/checkout?merchantAddr=
                {manageFormData?.merchantAddr}&referralAddr=
                {manageFormData?.referralAddr}&totalAmount=
                {manageFormData?.totalAmount}&percent={manageFormData?.percent}
                &productId={manageFormData?.productId}
            </div>
        </div>
    );
};

export default ResultModal;
