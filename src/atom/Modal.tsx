import { ChangeEvent, useEffect, useState } from 'react';
import Button, { TonClick } from './Button';
import { RecordTransactionSchema, TransactionCode, TRecordTransaction, TRecordTransactionDetail, TRecordTransactionRegist } from '@type/RecordTransaction';
import { formatDay } from '@util/dayUtils';
import { TCommonCode } from '@type/CommonCode';
import { UseQueryResult } from '@tanstack/react-query';
import TransactionRadio from '@component/TransactionRadio';

type TonSave = (item: TRecordTransaction) => void;
type TonUpdate = (item: TRecordTransactionDetail) => void;

interface IProps {
    codes: UseQueryResult<any, Error>[];
    transactionDate: string | null;
    transaction: TRecordTransactionDetail;
    buttonAction: {
        onClose: TonClick;
        onSave: TonSave;
        onUpdate: TonUpdate;
    }
}

const Modal = ({ codes, transactionDate, transaction, buttonAction }: IProps) => {
    const [formData, setFormData] = useState<TRecordTransactionRegist>({
        transactionDate: transactionDate ?? formatDay({ template: "YYYY-MM-DD" }),
        transactionCode: TransactionCode.INCOME,
        categoryCode: "10001001",
        description: '',
    });

    useEffect(() => {
        if (transaction) {
            setFormData(transaction);
        }
    }, [transaction]);


    const onChange = (
        e: ChangeEvent<HTMLSelectElement | HTMLInputElement>,
    ) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });

        if(name === "transactionCode") {
            if(value == TransactionCode.INCOME) {
                setFormData({
                    ...formData,
                    [name]: value,
                    categoryCode: codes[0].data[0]
                });
            } else if(value == TransactionCode.EXPENSE) {
                setFormData({
                    ...formData,
                    [name]: value,
                    categoryCode: codes[1].data[0]
                });
            }
        } 
    };

    const onSubmit = () => {

        // 새 항목 생성
        const newItem: TRecordTransaction = {
            transactionDate: formData.transactionDate,
            transactionCode: formData.transactionCode,
            categoryCode: formData.categoryCode,
            amount: Math.abs(Number(formData.amount)),
            description: formData.description,
        };

        if (!RecordTransactionSchema.safeParse(newItem)) {
            // error
            return;
        }

        transaction ? buttonAction.onUpdate({ ...transaction, ...newItem }) : buttonAction.onSave(newItem);

    };

    const Options = () => {
        const options = formData.transactionCode === TransactionCode.INCOME ? codes[0].data : codes[1].data;
        return (
            options.map((code: TCommonCode) =>
                <option key={code.code} value={code.code}>
                    {code.codeKorName}
                </option>
            )
        );
    }

    return (
        <div className={`fixed inset-0 bg-black opacity-90 backdrop-filter backdrop-blur-sm flex items-center justify-center z-20 transition-all duration-300`} >
            <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl transform transition-all duration-300">
                <h2 className="text-xl font-bold mb-4">새 항목 추가</h2>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="date"
                    >
                        날짜
                    </label>
                    <input
                        type="date"
                        id="date"
                        name="transactionDate"
                        value={formData.transactionDate}
                        onChange={onChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>

                <TransactionRadio
                    key={"fromModal"}
                    isSearch={false}
                    onChange={onChange}
                    checkedValue={formData.transactionCode}
                />

                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="category"
                    >
                        분류
                    </label>
                    <select
                        id="category"
                        name="categoryCode"
                        value={formData.categoryCode}
                        onChange={onChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    >
                        <Options />
                    </select>
                </div>

                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="amount"
                    >
                        금액
                    </label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        value={formData.amount}
                        onChange={onChange}
                        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline [appearance:none] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                        placeholder="금액을 입력하세요"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="description"
                    >
                        내용
                    </label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={onChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="내용을 입력하세요"
                        required
                    />
                </div>

                <div className="flex items-center justify-between">
                    <Button.Cancel onClick={buttonAction.onClose} />
                    <Button.Save onClick={onSubmit} />
                </div>
            </div>
        </div>
    );
};

export default Modal;
