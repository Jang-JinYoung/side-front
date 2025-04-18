import { ChangeEvent, useEffect, useState } from 'react';
import Button, { TonClick } from './Button';
import { RecordTransactionSchema, TransactionCode, TRecordTransaction, TRecordTransactionDetail, TRecordTransactionRegist } from '@type/RecordTransaction';
import { formatDay } from '@util/dayUtils';

type TonSave = (item: TRecordTransaction) => void;
type TonUpdate = (item: TRecordTransactionDetail) => void;

const Modal = ({ transaction, onClose, onSave, onUpdate }: { transaction: TRecordTransactionDetail, onClose: TonClick, onSave: TonSave, onUpdate: TonUpdate }) => {

    const [formData, setFormData] = useState<TRecordTransactionRegist>({
        transactionDate: formatDay({ template: "YYYY-MM-DD" }),
        transactionCode: TransactionCode.INCOME,
        categoryCode: '식비',
        description: '',
    });

    useEffect(() => {
        console.log(transaction);
        if(transaction) {
            setFormData(transaction);
            console.log(formData);
        }
    },[transaction]);


    const onChange = (
        e: ChangeEvent<HTMLSelectElement | HTMLInputElement>,
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
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

        onSave(newItem);

    };

    return (
        <div className="fixed inset-0 bg-black opacity-90 backdrop-filter backdrop-blur-sm flex items-center justify-center z-20 transition-all duration-300">
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
                        name="date"
                        value={formData.transactionDate}
                        onChange={onChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        유형
                    </label>
                    <div className="flex space-x-4">
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="type"
                                value={TransactionCode.INCOME}
                                checked={formData.transactionCode === TransactionCode.INCOME}
                                onChange={onChange}
                                className="form-radio"
                            />
                            <span className="ml-2">입금</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="type"
                                value={TransactionCode.EXPENSE}
                                checked={formData.transactionCode === TransactionCode.EXPENSE}
                                onChange={onChange}
                                className="form-radio"
                            />
                            <span className="ml-2">지출</span>
                        </label>
                    </div>
                </div>

                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="category"
                    >
                        분류
                    </label>
                    <select
                        id="category"
                        name="category"
                        value={formData.categoryCode}
                        onChange={onChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    >
                        {formData.transactionCode === TransactionCode.EXPENSE ? (
                            <>
                                <option value="식비">식비</option>
                                <option value="교통비">교통비</option>
                                <option value="쇼핑">쇼핑</option>
                                <option value="생활비">생활비</option>
                                <option value="여가">여가</option>
                                <option value="기타">기타</option>
                            </>
                        ) : (
                            <>
                                <option value="급여">급여</option>
                                <option value="용돈">용돈</option>
                                <option value="환불">환불</option>
                                <option value="기타">기타</option>
                            </>
                        )}
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
                    <Button.Cancel onClick={onClose} />
                    <Button.Save onClick={onSubmit} />
                </div>
            </div>
        </div>
    );
};

export default Modal;
