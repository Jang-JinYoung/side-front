import React, { useState } from "react";
import Button, { TonClick } from "./Button";
import { GroupedData } from "src/pages/test";
import { TRecordTransaction } from "@type/RecordTransaction";

interface IProps {
    isOpen: boolean,
    setOpen: TonClick,
    data?: TRecordTransaction[] | null,
};

const SlidingPanel = ({ isOpen, setOpen, data }: IProps) => {


    return (
        <div className="relative">

            {/* 슬라이드 패널 */}
            <div
                className={`fixed top-0 right-0 h-full w-[20%] bg-gray-800 text-white transform transition-transform duration-500 ease-in-out overflow-y-auto ${isOpen ? "translate-x-0" : "translate-x-full"} `}
            >
                <Button
                    className="absolute top-4 right-4 bg-red-500"
                    onClick={setOpen}
                    text="X"
                />

                <div className="overflow-y-scroll h-full  p-4 mt-15">
                    {
                        data ? data.map((t: TRecordTransaction, index) =>
                            <Card key={index} data={t} />
                        ) : (
                            <div>내용을 추가해보세요!</div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};
const Card = ({ data }: {data:TRecordTransaction}) => {

    const { type, category, description, amount } = data;
    
    return (
        <div className="flex items-center justify-between p-4 bg-gray-100 border rounded-lg shadow-md mb-5">
            {/* 좌측 영역 */}
            <div>
                {/* 지출/입금 카테고리 */}
                <span
                    className={`block text-sm font-bold ${type === "EXPENSE" ? "text-red-500" : "text-green-500"}`}
                >
                    {type} - {category}
                </span>
                {/* 설명 */}
                <p className="text-gray-700 text-sm mt-1">{description}</p>
            </div>

            {/* 우측 금액 */}
            <div className="text-right">
                <span
                    className={`text-lg font-bold ${type === "EXPENSE" ? "text-red-500" : "text-green-500"}`}
                >
                    {amount.toLocaleString()} 원
                </span>
            </div>
        </div>
    );
};

export default SlidingPanel;
