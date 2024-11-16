import {useAtomValue} from "jotai";
//TODO: Not a good idea
import {schemaIdAtom, manageFormAtom} from "@/services/management";
const ResultModal: React.FC = () => {
    const schemaId = useAtomValue(schemaIdAtom);
    const manageFormData = useAtomValue(manageFormAtom);

    return (
        <div className="p-[24px] flex flex-col gap-[20px]">
            <div>
                http://localhost:3000/checkout?merchantAddr=
                {manageFormData?.merchantAddr}&referralAddr=
                {manageFormData?.referralAddr}&totalAmount=
                {manageFormData?.totalAmount}&percent={manageFormData?.percent}
                &productId={manageFormData?.productId}
            </div>
            <div>http://localhost:3000/verify?schemaId={schemaId}</div>
        </div>
    );
};

export default ResultModal;
