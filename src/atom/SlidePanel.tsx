import React, { useState } from "react";
import Button, { TonClick } from "./Button";
import { GroupedData } from "src/pages/test";
import { TRecordTransaction } from "@type/RecordTransaction";

interface IProps {
    isOpen: boolean,
    setOpen: TonClick,
    data?: any,
};

const SlidingPanel = ({ isOpen, setOpen, data }: IProps) => {

    console.log(data);

    return (
        <div className="relative">

            {/* 슬라이드 패널 */}
            <div
                className={`fixed top-0 right-0 h-full w-[20%] bg-gray-800 text-white transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <Button
                    className="absolute top-4 right-4 bg-red-500"
                    onClick={setOpen}
                    text="X"
                />

                <div className="p-4">
                    <h2 className="text-lg font-bold">슬라이드 패널</h2>
                    <p>여기에 내용을 추가하세요.</p>
                    {
                        data && data.map((t: any) => <div>{t.amount}</div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SlidingPanel;
