
import TransactionRadio from "./TransactionRadio";
import { ChangeEvent, useState } from "react";
import Input from "@atom/Input";
import { formatDay } from "@util/dayUtils";
import Button from "@atom/Button";

interface IProps {
    statistics: {
        income: number,
        expense: number,
        balance: number,
    },
    buttonAction: {
        // 검색
        onSearch: () => void;
    }
}

const defaultValue = {
    transactionCode: "10000000",
    startDate: formatDay({ template: "YYYY-MM-01" }),
    endDate: formatDay({ template: "YYYY-MM-DD" }),
}

const Filter = ({ statistics, buttonAction }: IProps) => {


    const [formData, setFormData] = useState(defaultValue);

    const onReset = () => {
        setFormData(defaultValue);

    }
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        console.log(name, value)
        setFormData({ ...formData, [name]: value });
    }


    return (
        <div className="w-1/5 bg-gray-50 p-4 border-r shadow-md">
            {/* 총입금/총지출/잔액 */}
            <SummaryInformation statistics={statistics} />

            <TransactionRadio
                key="fromFilter"
                isSearch={true}
                onChange={onChange}
                checkedValue={formData.transactionCode}
            />

            {/* 날짜 필터 */}
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="date"
            >
                시작
            </label>
            <Input.Date value={formData.startDate} onChange={onChange} name="startDate" />
            <label
                className="block text-gray-700 text-sm font-bold mb-2 mt-5"
                htmlFor="date"
            >
                종료
            </label>
            <Input.Date value={formData.endDate} onChange={onChange} name="endDate" />

            <div className="flex justify-center mt-10">
                <Button
                    className="bg-gray-500"
                    onClick={onReset}
                    text="초기화"
                />
                <Button
                    className="ml-5 bg-blue-500"
                    onClick={buttonAction.onSearch}
                    text="검색"
                />
            </div>
        </div>
    );
}

const SummaryInformation = ({ statistics }: { statistics: any }) => {
    return (
        <div className="mb-6">
            <div className="mb-2">
                <span className="block text-gray-600">수입</span>
                <span className="text-green-500 font-bold text-xl">+{statistics?.income.toLocaleString()} 원</span>
            </div>
            <div className="mb-2">
                <span className="block text-gray-600">지출</span>
                <span className="text-red-500 font-bold text-xl">-{statistics?.expense.toLocaleString()} 원</span>
            </div>
            <div className="mb-2">
                <span className="block text-gray-600">잔액</span>
                <span className="text-gray-500 font-bold text-xl">{statistics?.balance.toLocaleString()} 원</span>
            </div>
        </div>
    );
};


export default Filter;