import { getCodeByCodeName } from "@service/api/codeApi";
import { useQuery } from "@tanstack/react-query";
import { TCommonCode } from "@type/CommonCode";
import { ChangeEvent } from "react";


interface IProps {
    isSearch: boolean;
    onChange: () => ChangeEvent<HTMLInputElement>;
    checked: boolean;
}

/**
 * 입/출금 유형선택
 * @returns 
 */
const TransactionRadio = ({
    isSearch,
    onChange,
    checked
} : IProps ) => {

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
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="transactionCode"
                                value="10000000"
                                checked={checked}
                                onChange={onChange}
                                className="form-radio"
                            />
                            <span className="ml-2">전체</span>
                        </label>
                }
                {
                    codes &&
                    codes.map((code: TCommonCode) =>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="transactionCode"
                                value={code.code}
                                checked={checked}
                                onChange={onChange}
                                className="form-radio"
                            />
                            <span className="ml-2">{code.codeKorName}</span>
                        </label>
                    )
                }
            </div>
        </div>
    );
}