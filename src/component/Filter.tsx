import { TCommonCode } from "@type/CommonCode";
import TransactionRadio from "./TransactionRadio";
import { ChangeEvent, useState } from "react";
import Input from "@atom/Input";
import { formatDay } from "@util/dayUtils";

const Filter = ({ statistics, codes }: { statistics: any, codes: any }) => {


    const [formData1, setFormData] = useState({
        transactionCode: "10000000",
        startDate: formatDay({template: "YYYY-MM-DD"}),
        endDate: formatDay({template: "YYYY-MM-DD"}),
    });

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({...formData1, [name]: value});
    }


    return (
        <div className="w-1/5 bg-gray-50 p-4 border-r shadow-md">
            {/* 총입금/총지출/잔액 */}
            <SummaryInformation statistics={statistics} />

            <TransactionRadio
                key="fromFilter"
                isSearch={true}
                onChange={onChange}
                checkedValue={formData1.transactionCode}
            />

            {/* 날짜 필터 */}
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="date"
            >
                시작
            </label>
            <Input.Date value={formData1.startDate} onChange={onChange} name=" " />
            <label
                className="block text-gray-700 text-sm font-bold mb-2 mt-5"
                htmlFor="date"
            >
                종료
            </label>
            <Input.Date value={formData1.endDate} onChange={onChange} />
        </div>
    );
}

const SummaryInformation = ({ statistics }: { statistics: any }) => {
    return (
        <div className="mb-6">
            <div className="mb-2">
                <span className="block text-gray-600">수입</span>
                <span className="text-green-500 font-bold text-xl">+{statistics?.income} 원</span>
            </div>
            <div className="mb-2">
                <span className="block text-gray-600">지출</span>
                <span className="text-red-500 font-bold text-xl">-{statistics?.expense} 원</span>
            </div>
            <div className="mb-2">
                <span className="block text-gray-600">잔액</span>
                <span className="text-gray-500 font-bold text-xl">{statistics?.balance} 원</span>
            </div>
        </div>
    );
};


export default Filter;