import { getCodeByCodeName } from "@service/api/codeApi";
import { useQuery } from "@tanstack/react-query";
import { TCommonCode } from "@type/CommonCode";
import { TransactionCode } from "@type/RecordTransaction";
import { ChangeEvent } from "react";


interface IProps {
    isSearch: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    checkedValue: string;
}

/**
 * 입/출금 유형선택
 * @returns 
 */
const TransactionRadio = ({
    isSearch,
    onChange,
    checkedValue
}: IProps) => {

    const { isLoading, data: codes } = useQuery({
        queryKey: ['code', 'list', 'transactionCode'],
        queryFn: () => getCodeByCodeName("TransactionCode"),
    });
    
    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                유형
            </label>
            <div className="flex space-x-4">
                {
                    isSearch &&
                    <div className="inline-flex items-center">
                        <input
                            type="radio"
                            name="transactionCode"
                            value="10000000"
                            checked={checkedValue === "10000000"}
                            onChange={onChange}
                            className="form-radio"
                        />
                        <span className="ml-2">전체</span>
                    </div>
                }
                {
                    !isLoading &&
                    codes.map((code: TCommonCode) =>
                        <div key={code.code} className="inline-flex items-center">
                            <input
                                type="radio"
                                name="transactionCode"
                                value={code.code}
                                checked={checkedValue === code.code}
                                onChange={onChange}
                                className="form-radio"
                            />
                            <span className="ml-2">{code.codeKorName}</span>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default TransactionRadio;